import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, TooltipPosition } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})


  

export class ReplyComponent implements OnInit {
  displayedColumns: string[] = ['head', 'detail', 'reply','date', 'show'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  head;
  detail;
  reply;
  date;

  constructor(
    private modalService: NgbModal


  ) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openModalShow(data, modal) {
    this.head = data.head;
    this.detail = data.detail;
    this.reply = data.reply;
    this.date = data.date;
    this.modalService.open(modal, { centered: true })
  }


  
}

export interface PeriodicElement {
  head: string;
  detail: string;
  reply : string;
  date: Date;
  
}
const ELEMENT_DATA: PeriodicElement[] = [

];