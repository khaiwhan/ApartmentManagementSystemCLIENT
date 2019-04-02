import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { Router } from '@angular/router';
import { delay } from 'q';


@Component({
  selector: 'app-memberairbook',
  templateUrl: './memberairbook.component.html',
  styleUrls: ['./memberairbook.component.scss']
})
export class MemberairbookComponent implements OnInit {
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
    this.getAirTable()

    this.service.getAirna().subscribe(
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
  getAirTable() {
    this.service.getAirna().subscribe(
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
        this.getAirTable();
        await delay(1000);
        this.modalService.dismissAll()
        this.router.navigate(['member/member/airroom'])
        
      }
    )
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

