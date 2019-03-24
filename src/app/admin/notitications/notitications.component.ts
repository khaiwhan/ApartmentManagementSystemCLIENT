import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, TooltipPosition } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-notitications',
  templateUrl: './notitications.component.html',
  styleUrls: ['./notitications.component.scss']
})
export class NotiticationsComponent implements OnInit {
  displayedColumns: string[] = ['room_id', 'username', 'email', 'book_in', 'book_out', 'book_date', 'icon'];
  dataSource: MatTableDataSource<[any]>;

  room_id;
  username;
  email;
  book_in;
  book_out;
  book_date;
  sort: any;

  public notifiybook = new FormGroup({
    room_id: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    book_in: new FormControl(''),
    book_out: new FormControl(''),
    book_date: new FormControl(''),
   
  })

  constructor(
    private modalService: NgbModal,
    private service: ServerService,
  ) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.getBookTable()
  }
  openModalSearch(data, modal) {
    this.room_id = data.room_id;
    this.username = data.username;
    this.email = data.email;
    this.book_in = data.book_in;
    this.book_out = data.book_out;
    this.book_date = data.book_date;
    this.modalService.open(modal, { centered: true })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getBookTable() {
    this.service.getBook().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }
}

