import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ServerService } from '../@service/server.service';
import { Router, NavigationEnd } from '@angular/router';
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
  user;

  constructor(
    public dialog: MatDialog,
    private session: SessionService,
    private route: Router
  ) {

  }

  ngOnInit() {
    this.user = this.session.getActiveUser();
   

    if (this.user == null || this.user === "") {
      this.route.navigate(['/mainpage/mainpage/home'])
    }
    if (this.user !== null || this.user !== "") {
      if (this.user[0].cus_role === "admin" && this.user[0].cus_role != null && this.user[0].cus_role !== "") {
        this.route.navigate(['/admin/admin/overview'])
      }
      if (this.user[0].cus_role === "member" && this.user[0].cus_role != null && this.user[0].cus_role !== "") {
        this.route.navigate(['/member/member/home'])
      }
      if (this.user[0].cus_role === "staff" && this.user[0].cus_role != null && this.user[0].cus_role !== "") {
        this.route.navigate(['/staff/staff'])
      }
      if (this.user[0].cus_role === "viewer" && this.user[0].cus_role != null && this.user[0].cus_role !== "") {
        this.route.navigate(['/viewer/viewer/overview'])
      }
      
      
    }


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
  onLogout() {
    this.session.clearActiveUser();
    window.history.go(0);
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
    private route: Router,
    private dialog: MatDialog
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onLogin() {

    const data = {
      username: this.Username.value,
      password: this.Password.value
    }
    if (this.Username.value != null && this.Password.value != null) {
      this.service.onLogin(data).subscribe(
        (res) => {
          this.session.setActiveUser(res);
          if (res[0].cus_role === "viewer") {
            window.history.go(0);
          }
          if (res[0].cus_role === "admin") {
            this.route.navigate(['/admin/admin/overview'])
          }
          if (res[0].cus_role === "staff") {
            window.history.go(0);
          }
          if (res[0].cus_role === "member") {
            window.history.go(0);
          }
        }

      )
    }
    else {
      this.dialog.open(AlertLoginError);
    }

  }
}

@Component({
  selector: 'registerDialog',
  templateUrl: 'registerDialog.html',
})
export class RegisterDialog {

  Username = new FormControl('');
  Password = new FormControl('');
  ConfirmPassword = new FormControl('');
  Firstname = new FormControl('');
  Lastname = new FormControl('');
  Email = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<RegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: RegisterDialog,
    private service: ServerService,
    private dialog: MatDialog
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRegister() {
    // this.dialog.open(AlertRegisterError)
    const data = {
      username: this.Username.value,
      password: this.Password.value,
      cus_fname: this.Firstname.value,
      cus_lname: this.Lastname.value,
      email: this.Email.value
    }
    // console.log(this.ConfirmPassword.value);
    // console.log(this.Password.value);


    if (this.ConfirmPassword.value === this.Password.value) {
      this.service.onRegister(data).subscribe(
        (res) => {
          this.dialog.open(AlertRegisterSuccess)
        },

        (err) => {
          this.dialog.open(AlertRegisterError)
        }
      )
    } else {
      this.dialog.open(AlertRegisterError)
    }

  }
}


@Component({
  selector: 'alertRegisterSuccess',
  templateUrl: 'alertRegisterSuccess.html',
  styles: [`button{background:#63320e;color:snow;}`]
})
export class AlertRegisterSuccess {

  constructor(private dialog: MatDialog) { }
  onNoClick(): void {
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'alertRegisterError',
  templateUrl: 'alertRegisterError.html',
  styles: [`button{background:#63320e;color:snow}`]
})
export class AlertRegisterError {
  constructor(private dialog: MatDialog) { }
  onNoClick() { this.dialog.closeAll(); }
}

@Component({
  selector: 'alertLoginError',
  templateUrl: 'alertLoginError.html',
  styles: [`button{background:#63320e;color:snow}`]
})
export class AlertLoginError {
  constructor(private dialog: MatDialog) { }
  onNoClick() { this.dialog.closeAll(); }
}

