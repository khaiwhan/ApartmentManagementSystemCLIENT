import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'q';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.scss']
})
export class RecieptComponent implements OnInit {
  @ViewChild('success') success: ElementRef;
  
  displayedColumns: string[] = ['room_id', 'username', 'dabit_month', 'dabit_year', 'receipt_date', 'receipt_bill', 'icon'];
  dataSource: MatTableDataSource<[any]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  receipt_data;
  room_id;
  cus_fname;
  cus_lname;

  // private receipt_data = new FormControl('')
  constructor(
    private service: ServerService,
    private modalService: NgbModal,
  ) { }


  ngOnInit() {
    this.getReceiptTable();
  }

  getReceiptTable() {
    this.service.getReceipt().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        // console.log(res);

      }
    )
  }

  //Filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openModal
  openModalReceipt(data, modal) {
    this.receipt_data = data.dabit_id;
    this.room_id = data.room_id;
    this.cus_fname = data.cus_fname;
    this.cus_lname = data.cus_lname;

    // console.log(this.receipt_data);
    this.modalService.open(modal, { centered: true })
  }
  closeModal() {
    this.modalService.dismissAll();
  }

  // onUpdateReceipt() {

  //   this.service.updateReceipt(data).subscribe(
  //     (res) => {
  //       this.getReceiptTable();
  //       this.closeModal();
  //     }
  //   )
  // }
  onUpdateReceipt() {
    const data = [{
      dabit_id: (this.receipt_data)
    }]
    console.log(data)
    this.service.updateReceipt(data).subscribe(
      async (res) => {
        this.modalService.open(this.success)
        this.getReceiptTable();
        await delay(1000);
        this.closeModal();
      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
