import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerService } from 'src/app/@service/server.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss']
})
export class WaterComponent implements OnInit {
  displayedColumns: string[] = ['room_id', 'water_start', 'water_end', 'elect_start', 'elect_end', 'update'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  room;
  sort;
  constructor(
    private modalService: NgbModal,
    private service: ServerService,

  ) { }

  public updatedebit = new FormGroup({
    water_end: new FormControl(''),
    elect_end: new FormControl(''),
   
  })

  ngOnInit() {
    this.getMeterTable();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModalMeter(data, modal) {
    this.room = data.room;
    this.modalService.open(modal, { centered: true })
  }

  getMeterTable() {
    this.service.getMeter().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }
}
