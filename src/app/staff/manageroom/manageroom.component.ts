import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-manageroom',
  templateUrl: './manageroom.component.html',
  styleUrls: ['./manageroom.component.scss']
})
export class ManageroomComponent implements OnInit {

  displayedColumns: string[] = ['Room', 'Residents', 'TypeRoom', 'StatusUser', 'CheckIN', 'CheckOut', 'StatusRoom', 'Edit', 'Moveout'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('success') success: ElementRef;

  public AddRoomForm = new FormGroup({
    room_id: new FormControl(''),
    username: new FormControl(''),
    type_id: new FormControl(''),
    room_status: new FormControl('')
  })
  public updateRoom = new FormGroup({
    update_room_id: new FormControl(''),
    update_username: new FormControl(''),
    update_room_status: new FormControl(''),
    update_check_in: new FormControl(''),
    update_check_out: new FormControl('')
  })


  // update_room_id;
  // update_username;
  // update_type_id;
  // update_room_status;
  type_id;
  type_room;
  cus_fname;
  cus_lname;
  room_status;
  check_in;
  check_out;
  // delete_room_id;
  room_id;
  username;
  listUsername;
  listcustomer;
  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modal: NgbModal,
    private modalService: NgbModal,
    private router:Router,
    
    private route: ActivatedRoute,

  ) { }


  ngOnInit() {
    this.getTable();
    this.service.getCustomer().subscribe(
      (res) => {
        this.listcustomer = res;
      }
    )
    // this.service.getDataRoomResident().subscribe(
    //   (res) => {
    //     this.listUsername = res;
    //   }
    // )
  }
  getTable() {
    this.service.getDataRoomResident().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.listUsername = res;
      }
    )
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


 
  openModalEditUser(data, modal) {
    console.log(data);
    
    this.room_id = data.room_id;
    this.username = data.username;
    this.room_status = data.room_status;
    this.check_in = data.check_in;
    this.check_out = data.check_out;
    this.modal.open(modal, { centered: true })
  }
  onEditRoom() {
    console.log(this.updateRoom.value);

    this.service.updateRoomResident(this.updateRoom.value).subscribe(
      async (res) => {
        this.onUpdateVtoM();
        this.modalService.open(this.success);    
        this.getTable();
        await delay(1000);
        this.closeModal();
        
      }
    )
  }
  onUpdateVtoM() {
    const data = [{
      username: (this.username)
    }]
    console.log(data[0])
    this.service.updateViewToMember(data[0]).subscribe(
      (res) => {
      
       
      }
    )
  }

  // end edit 


  onUpdateRoom() {
    this.service.updateRoomResident(this.updateRoom.value).subscribe(
      (res) => {
        this.getTable();
        this.modal.dismissAll();
      }
    )
  }
  openModalClearroom(data, modal) {
    console.log(data);
    this.room_id = data.room_id;
    this.type_id = data.type_id;
    this.cus_fname = data.cus_fname;
    this.cus_lname = data.cus_lname;
    this.username = data.username;

    this.modalService.open(modal, { centered: true })
  }

  onUpdateClearRoom() {
    const data = [{
      room_id: (this.room_id)
    }]
    console.log(data)
    this.service.updateClearRoom(data).subscribe(
      async (res) => {
        this.onUpdatemoveout();
        this.modalService.open(this.success)
        this.getTable();
        await delay(1000);
        this.closeModal();

      }
    )
  }
  onUpdatemoveout() {
    const data = [{
      username: (this.username)
    }]
    console.log(data)
    this.service.updateMoveout(data).subscribe(
      (res) => {

      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  gotoEditpage(){
    this.route.navigate(['../editroomresident',this.AddRoomForm.value.room_id])
  }

  data: Date;
 
  onValueChange(value: Date): void {
    this.data = value;
  }
}
