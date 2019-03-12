import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manageroom',
  templateUrl: './manageroom.component.html',
  styleUrls: ['./manageroom.component.scss']
})
export class ManageroomComponent implements OnInit {

  displayedColumns: string[] = ['Room', 'Residents', 'TypeRoom', 'StatusUser', 'StatusRoom','Edit'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  delete_room_id;

  listUsername;
  constructor(private service: ServerService, private dialog: MatDialog,private modal:NgbModal) { }
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
    this.service.addRoomResident(this.AddRoomForm.value).subscribe(
      (res) => {
        this.getTable();
        this.modal.dismissAll();
      }
    )
  }
  openModalEditUser(data,modal){
    this.update_room_id = data.room_id;
    this.update_username = data.username;
    this.update_type_id = data.type_id;
    this.update_room_status = data.status_room;
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
  openModalDeleteUser(id,modal){
    this.delete_room_id = id;
    this.modal.open(modal,{centered:true});
  }
  onDeleteRoom(){
    this.service.deleteRoom(this.delete_room_id).subscribe(
      (res)=> {
        this.getTable();
        this.modal.dismissAll();
      }
    )
  }
}
