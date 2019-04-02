import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { delay } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fan-book',
  templateUrl: './fan-book.component.html',
  styleUrls: ['./fan-book.component.scss']
})
export class FanBookComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  displayedColumns: string[] = ['room_id', 'type_room', 'room_status', 'book'];
  dataSource: MatTableDataSource<[any]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('success') success: ElementRef;
  date1 = new Date();
  listRoom;
  // stepper
  isLinear = false;
  user;

  public roomm = new FormControl('');
  room_id;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private router:Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.getFanTable()

    this.service.getFanna().subscribe(
      (res) => {
        this.listRoom = res;
      }
    )
    this.firstFormGroup = this._formBuilder.group({
      book_in: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      book_out: ['', Validators.required]
    });
  }

  //get
  getFanTable() {
    this.service.getFanna().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }


  // openModal
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
      book_in: this.firstFormGroup.value.book_in,
      book_out: this.secondFormGroup.value.book_out,
      room_id: this.roomm.value,
      book_date: this.date1,
      username: this.user[0].username
    }]
    console.log(data)
    this.service.AddtableBook(data).subscribe(
      async (res) => {
        this.modalService.open(this.success)
        this.getFanTable();
        // window.history.go(0);
        await delay(1000);
        this.modalService.dismissAll()
        this.router.navigate(['viewer/viewer/fanroom'])
      }
    )
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
