import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-manageroom',
  templateUrl: './manageroom.component.html',
  styleUrls: ['./manageroom.component.scss']
})
export class ManageroomComponent implements OnInit {

  displayedColumns: string[] = ['Room', 'Residents', 'TypeRoom', 'StatusUser', 'CheckIN','CheckOut','StatusRoom','Edit', 'Moveout'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('success') success: ElementRef;

  public AddRoomForm = new FormGroup({
    room_id:new FormControl(''),
    username:new FormControl(''),
    type_id:new FormControl(''),
    room_status:new FormControl('')
  })

  public updateRoom = new FormGroup({
    update_room_id:new FormControl(''),
    update_username:new FormControl(''),
    update_type_id:new FormControl(''),
    update_room_status:new FormControl('')
  })
  update_room_id;
  update_username;
  update_type_id;
  update_room_status;
  type_id;
  type_room;
  cus_fname;
  cus_lname;
  // delete_room_id;
  room_id;
  username;
  listUsername;
  constructor(
    private service: ServerService, 
    private dialog: MatDialog,
    private modal:NgbModal,
    private route:Router,
    private modalService: NgbModal,
    
    ) { }
    
  ngOnInit() {
    this.getTable();
    this.service.getDataUser().subscribe(
      (res) => {
        this.listUsername = res;
      }
    )
  }
  getTable(){
    this.service.getDataRoomResident().subscribe(
      (res) => {        
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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
  openModalAddRoom(modal){
    this.modal.open(modal,{centered:true});
  }
  onAddRoom(){
    // this.service.addRoomResident(this.AddRoomForm.value).subscribe(
    //   (res) => {
    //     this.getTable();
    //     this.modal.dismissAll();
    //   }
    // )
    this.route.navigate[('admin/admin/manageroom/addroomresident')]
  }
  openModalEditUser(data,modal){
    // this.update_room_id = data.room_id;
    // this.update_username = data.username;
    // this.update_type_id = data.type_id;
    // this.update_room_status = data.status_room;
    this.modal.open(modal,{centered:true})
  }
  onUpdateRoom(){
    this.service.updateRoomResident(this.updateRoom.value).subscribe(
      (res)=>{
        this.getTable();
        this.modal.dismissAll();
      }
    )
  }
  // openModalDeleteUser(id,modal){
  //   this.delete_room_id = id;
  //   this.modal.open(modal,{centered:true});
  // }
  // onDeleteRoom(){
  //   this.service.deleteRoom(this.delete_room_id).subscribe(
  //     (res)=> {
  //       this.getTable();
  //       this.modal.dismissAll();
  //     }
  //   )
  // }

  openModalClearroom(data, modal) {
    console.log(data);
    this.type_room = data.type_room;    
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
        this.getTable();
        this.closeModal();
       
      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  gotoEditpage(){
    this.route.navigate(['../editroomresident',this.AddRoomForm.value.room_id])
  }
}
