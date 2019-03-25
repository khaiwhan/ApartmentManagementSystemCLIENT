import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-air-book',
  templateUrl: './air-book.component.html',
  styleUrls: ['./air-book.component.scss']
})
export class AirBookComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  displayedColumns: string[] = ['room_id', 'type_room', 'room_status', 'book'];
  dataSource: MatTableDataSource<[any]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  date1 = new Date();

  public date_checkin = new FormControl;
  public date_checkout = new FormControl;


  user;
  public insertBook = new FormGroup({
    room_id: new FormControl(''),
    username: new FormControl(''),
    book_in: new FormControl(''),
    book_out: new FormControl(''),
    book_date: new FormControl(''),
   
  })
  room_id;

  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session : SessionService
  ) { }

  ngOnInit() {
   this.user = this.session.getActiveUser();
    this.getAirTable()
  }

  //get
  getAirTable() {
    this.service.getAirna().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  openModalAirroom(data, modal) {
    this.room_id = data;
    // console.log(this.room_id,this.insertBook.value);
    // this.date_checkin
    this.modalService.open(modal, { centered: true })
  }
  closeModal() {
    this.modalService.dismissAll();
  }
  //insert
  onInsertbook() {
    const data = [{
      book_in:this.insertBook.value.book_in,
      book_out:this.insertBook.value.book_out,
      room_id:this.room_id,
      book_date:this.date1,
      username:this.user[0].username
    }]
    console.log(data)
    this.service.AddtableBook(data).subscribe(
      (res) => {
        this.getAirTable();
        this.closeModal();
      }
    )
  }

}
