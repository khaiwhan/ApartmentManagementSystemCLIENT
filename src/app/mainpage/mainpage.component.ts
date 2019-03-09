import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ServerService } from '../@service/server.service';
import { Router } from '@angular/router';
import { SessionService } from '../@service/session.service';
export interface DialogData {
  username: string;
  password: string;
}

export interface RegisterDialog {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
}
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  hide = true;
  hide1 = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: { username: this.username, password: this.password }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');

    // });
  }
  openDialogRegister(): void {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '400px',
      data: {
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');

    // });
  }

}

@Component({
  selector: 'loginDialog',
  templateUrl: 'loginDialog.html',
})
export class DialogOverviewExampleDialog {

  username: string;
  password: string;
  Username = new FormControl('');
  Password = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service: ServerService,
    private session: SessionService,
    private route: Router) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onLogin() {
    console.log(this.Username.value, this.Password.value)
    alert("function was called")
    const data = {
      username: this.Username.value,
      password: this.Password.value
    }
    this.service.onLogin(data).subscribe(
      (res) => {
        alert("Success")
      }
    )
  }
}

@Component({
  selector: 'registerDialog',
  templateUrl: 'registerDialog.html',
})
export class RegisterDialog {

  Username = new FormControl('');
  Password = new FormControl('');
  Firstname = new FormControl('');
  Lastname = new FormControl('');
  Email = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<RegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: RegisterDialog,
    private service:ServerService
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRegister(){
    const data = {
      username:this.Username.value,
      password:this.Password.value,
      cus_fname:this.Firstname.value,
      cus_lname:this.Lastname.value,
      email:this.Email.value
    }
    this.service.onRegister(data).subscribe(
      (res) => {
        alert("Register Complete")
      },
      (err) => {
        alert("Something Incorrect")
      }
    )
  }
}
