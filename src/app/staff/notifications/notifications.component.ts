import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerService } from 'src/app/@service/server.service';
import { delay } from 'q';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  displayedColumns: string[] = ['room_id', 'type_room', 'username', 'email', 'book_in', 'book_out', 'book_date', 'icon','delete'];
  dataSource: MatTableDataSource<[any]>;

  room_id;
  type_room;
  username;
  email;
  book_in;
  book_out;
  book_date;
  sort: any;
  book_id;
  deleteBook;

  public updateBooktoRoom = new FormGroup({
    room_id: new FormControl(''),
    cus_fname: new FormControl(''),
    cus_lname: new FormControl(''),
    email: new FormControl(''),
    check_in: new FormControl(''),
    check_out: new FormControl(''),
    book_date: new FormControl(''),
    username: new FormControl(''),

  })
  cus_fname;
  cus_lname;

  constructor(
    private modalService: NgbModal,
    private service: ServerService,
  ) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('Desuccess') Desuccess: ElementRef;
  ngOnInit() {
    this.getBookTable()
  }
  openModalSearch(data, modal) {
    this.room_id = data.room_id;
    this.username = data.username;
    this.cus_fname = data.cus_fname;
    this.cus_lname = data.cus_lname;
    this.email = data.email;  
    this.book_in = data.book_in;
    this.book_out = data.book_out;
    this.book_date = data.book_date;
    this.book_id = data.book_id;

    this.modalService.open(modal, { centered: true })
  }
  closeModal() {
    this.modalService.dismissAll();
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

  // update book to room
  onUpdatetoRoom() {
    console.log(this.updateBooktoRoom.value)
    this.service.updateBooktoRoom(this.updateBooktoRoom.value).subscribe(
      async (res) => {
        this.onDeleteBook();
        this.getBookTable();
        this.closeModal();
        
      }
    )
  }

//delete Book
  openModalDeleteUser(data,modal){
    console.log(data);
    this.book_id = data.book_id;
    this.modalService.open(modal,{centered:true})
  }
  onDeleteBook() {
 
    console.log(this.book_id);
    
    this.service.deleteBook(this.book_id).subscribe(
      async (res) => {
        this.modalService.open(this.Desuccess)
        this.getBookTable();
        await delay(1000);
        this.closeModal();
        
        
      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
