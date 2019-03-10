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
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this.route.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.route.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.user = this.session.getActiveUser();

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
    this.route.navigate(['/mainpage/mainpage/home'])
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
    const data = {
      username: this.Username.value,
      password: this.Password.value
    }
    this.service.onLogin(data).subscribe(
      (res) => {
        alert("Success");
        this.session.setActiveUser(res);
        if (res[0].cus_role === "viewer") {
          this.route.navigate(['/mainpage/mainpage/home'])
        }
        if (res[0].cus_role === "admin") {
          this.route.navigate(['/admin/admin'])
        }
        if(res[0].cus_role === "staff"){
          this.route.navigate(['/staff/staff/'])
        }
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
  ConfirmPassword = new FormControl('');
  Firstname = new FormControl('');
  Lastname = new FormControl('');
  Email = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<RegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: RegisterDialog,
    private service: ServerService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRegister() {
    const data = {
      username: this.Username.value,
      password: this.Password.value,
      cus_fname: this.Firstname.value,
      cus_lname: this.Lastname.value,
      email: this.Email.value
    }
    if(this.ConfirmPassword.value === this.Password.value){
      this.service.onRegister(data).subscribe(
        (res) => {
          alert("Register Complete")
        },
        (err) => {
          alert("Something Incorrect")
        }
      )
    }
    else{
      alert("Password and ConfirmPassword is different")
    }
  }
}
