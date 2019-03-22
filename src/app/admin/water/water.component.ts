import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.scss']
})
export class WaterComponent implements OnInit {
  displayedColumns: string[] = ['room', 'waterstart', 'waterend', 'electstart', 'electend', 'update'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  room;
  constructor(
    private modalService: NgbModal


  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openModalMeter(data, modal) {
    this.room = data.room;
    this.modalService.open(modal, { centered: true })
  }


}
export interface PeriodicElement {
  room: string;
  waterstart: string;
  waterend: string;
  electstart: string;
  electend: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {room: 'a111',  waterstart: '4444', waterend:'' , electstart: '11111' , electend: '' },

];