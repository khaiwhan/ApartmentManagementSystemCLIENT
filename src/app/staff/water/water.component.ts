import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerService } from 'src/app/@service/server.service';
import { ExcelService } from 'src/app/@service/excel.service';
import { Papa } from 'ngx-papaparse';
import { delay } from 'q';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss']
})
export class WaterComponent implements OnInit {
  displayedColumns: string[] = ['room_id', 'water_start', 'water_end', 'elect_start', 'elect_end', 'update'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('csvData') _file: ElementRef;
  @ViewChild('success') success: ElementRef;
  @ViewChild('error') error: ElementRef;
  public updatedebit = new FormGroup({
    water_end: new FormControl(''),
    elect_end: new FormControl(''),

  })
  update_room_id;
  update_water_start;
  update_water_end;
  update_elect_start;
  update_elect_end;
  public updateMeterManual = new FormGroup({
    room_id: new FormControl(''),
    water_start: new FormControl(''),
    water_end: new FormControl(''),
    elect_start: new FormControl(''),
    elect_end: new FormControl('')
  })
  listDownload;
  sort;
  dateShow;
  month;
  checkMonth;
  date = new Date();
  private data: any;
  private fileData;
  constructor(
    private modalService: NgbModal,
    private service: ServerService,
    private excel: ExcelService,
    private papa: Papa
  ) { }

  ngOnInit() {
    this.getMeterTable();
    this.checkMonth = (this.date.getMonth() + 1);
    this.checkMonth == 1 ? this.month = "January" : this.checkMonth == 2 ? this.month = "February" :this.checkMonth == 3 ? this.month = "March" :
    this.checkMonth == 4 ? this.month = "April" : this.checkMonth == 5 ? this.month = "May" :this.checkMonth == 6 ? this.month = "June" :
    this.checkMonth == 7 ? this.month = "July" : this.checkMonth == 8 ? this.month = "August" :this.checkMonth == 9 ? this.month = "September" :
    this.checkMonth == 10 ? this.month = "Octorber" : this.checkMonth == 11 ? this.month = "November" :this.checkMonth == 12 ? this.month = "December" : "-"
    this.dateShow = this.month + "-" + (this.date.getFullYear() + 543);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModalMeter(data, modal) {
    this.update_room_id = data.room_id;
    this.update_water_start = data.water_start;
    this.update_water_end = data.water_end;
    this.update_elect_start = data.elect_start;
    this.update_elect_end = data.elect_end
    this.modalService.open(modal, { centered: true })
  }

  onUpdateMeterManual() {
    this.service.updateMeter(this.updateMeterManual.value).subscribe(
      async (res) => {
        this.modalService.open(this.success)
        this.getMeterTable();
        await delay(1000);
        this.modalService.dismissAll()
      },
      async (err) => {
        this.modalService.open(this.error)
        this.getMeterTable();
        await delay(1000);
        this.modalService.dismissAll()
      }
    )
  }

  getMeterTable() {
    this.service.getMeter((this.date.getMonth() + 1), (this.date.getFullYear() + 543)).subscribe(
      (res) => {
        this.listDownload = res;
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }
  onDownload() {
    this.excel.exportAsExcelFile(this.listDownload, (this.date.getMonth() + 1) + "-" + (this.date.getFullYear() + 543))
  }
  onCSV() {
    const files = this._file.nativeElement.files;
    const blob: Blob = new Blob(files, { type: 'text/csv' });
    this.data = blob;

    const options = {
      header: true,
      complete: (results, file) => {
        this.fileData = results;
        console.log("file date",this.fileData.data);
        console.log(this.fileData.data.dabit_id);
        
      },
    };
    this.papa.parse(this.data, options);
  }
  onUpload() {
    if (!this.fileData || this.fileData.data.length <= 0) {
      alert('Please Choose File For Upload!!!')
    }
    else {
      this.service.uploadfile(this.fileData.data).subscribe(
        async (res) => {
          this.modalService.open(this.success)
          this.getMeterTable();
          await delay(1000);
          this.modalService.dismissAll()
        },
        async (err) => {
          this.modalService.open(this.success)
          this.getMeterTable();
          await delay(1000);
          this.modalService.dismissAll()
        }
      )
    }
  }
  Generater() {
    const data = [{
      year: (this.date.getFullYear() + 543),
      month: (this.date.getMonth())
    }]
    // console.log(data)
    this.service.GenerateTable(data).subscribe(
      async (res) => {
        this.modalService.open(this.success)
        this.getMeterTable();
        await delay(1000);
        this.modalService.dismissAll()
      }
    )
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
