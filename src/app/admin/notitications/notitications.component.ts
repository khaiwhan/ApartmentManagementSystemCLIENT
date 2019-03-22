import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notitications',
  templateUrl: './notitications.component.html',
  styleUrls: ['./notitications.component.scss']
})
export class NotiticationsComponent implements OnInit {
  displayedColumns: string[] = ['room', 'name', 'email', 'checkin', 'checkout', 'date', 'icon'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  room;
  name;
  email;
  checkin;
  checkout;
  date;


  constructor(
    private modalService: NgbModal

  ) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  openModalSearch(data, modal) {
    this.room = data.room;
    this.name = data.name;
    this.email = data.email;
    this.checkin = data.checkin;
    this.checkout = data.checkout;
    this.date = data.date;
    this.modalService.open(modal, { centered: true })
  }

}
export interface PeriodicElement {
  room: string;
  name: string;
  email: string;
  checkin: string;
  checkout: string;
  date: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { room: 'T101', name: 'Natanon', email: 'natanon@getMaxListeners.com',checkin:'11-02-2222',checkout:'13-02-2222', date: '12-02-2560' },
];

