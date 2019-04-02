import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'q';
export interface AddUserData {
  Username: string;
  Password: string;
  Firstname: string;
  Lastname: string;
  Email: string;
  Gender: string;
  Tel: string;
  Address: string;
  Status: string;
}
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {
  displayedColumns: string[] = ['Username', 'Password', 'Firstname', 'Lastname', 'Email', 'Gender', 'Tel', 'Address', 'Status', 'Edit'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('success') success: ElementRef;
  @ViewChild('Desuccess') Desuccess: ElementRef;
  
  constructor(private service: ServerService, private dialog: MatDialog, private modalService: NgbModal) { }

  public Username = new FormControl('');
  public Password = new FormControl('');
  public Firstname = new FormControl('');
  public Lastname = new FormControl('');
  public Email = new FormControl('');
  public Gender = new FormControl('');
  public Tel = new FormControl('');
  public Address = new FormControl('');
  public Status = new FormControl('');

  username;
  password;
  cus_fname;
  cus_lname;
  email;
  cus_sex;
  cus_phone;
  cus_addr;
  cus_role;

  deleteUSer;
  public updateUser = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    cus_fname: new FormControl(''),
    cus_lname: new FormControl(''),
    email: new FormControl(''),
    cus_sex: new FormControl(''),
    cus_phone: new FormControl(''),
    cus_addr: new FormControl(''),
    cus_role: new FormControl(''),
  })
  ngOnInit() {
    this.getTable();
  }
  getTable() {
    this.service.getCustomer().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }
  openModal(modal) {
    this.modalService.open(modal, { centered: true });
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
  openModalAddUser(modal) {
    this.modalService.open(modal, { centered: true })
  }
  onAddUser() {
    const data = {
      username: this.Username.value,
      password: this.Password.value,
      cus_fname: this.Firstname.value,
      cus_lname: this.Lastname.value,
      email: this.Email.value,
      cus_sex: this.Gender.value,
      cus_phone: this.Tel.value,
      cus_addr: this.Address.value,
      cus_role: this.Status.value
    }
    console.log(data);

    this.service.addUser(data).subscribe(
      async (res) => {
        if (res) {
          // this.dialog.open(AlertAddUserSuccess)
          this.getTable();
          this.closeModal();
        }
      },
      (err) => {
        alert("Error")
      }
    )
  }

  openModalEditUser(data, modal) {
    this.username = data.username;
    this.password = data.password;
    this.cus_fname = data.cus_fname;
    this.cus_lname = data.cus_lname;
    this.email = data.email;
    this.cus_sex = data.cus_sex;
    this.cus_phone = data.cus_phone;
    this.cus_addr = data.cus_addr;
    this.cus_role = data.cus_role;
    this.modalService.open(modal, { centered: true })
  }
  onUpdateUser() {
    console.log(this.updateUser.value)
    this.service.editUser(this.updateUser.value).subscribe(
      async (res) => {
        this.modalService.open(this.success)
        this.getTable();
        await delay(1000);
        this.closeModal();
        
      }
    )
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  openModalDeleteUser(deleteUSer,modal){
    this.deleteUSer = deleteUSer;
    this.modalService.open(modal,{centered:true})
  }
  onDeleteUser(){
    this.service.deleteUser(this.deleteUSer).subscribe(
      async (res) => {
        this.modalService.open(this.Desuccess)
        this.getTable();
        await delay(1000);
        this.closeModal();
                
      }
    )
  }
}
