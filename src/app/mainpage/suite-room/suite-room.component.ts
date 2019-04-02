import { Component, OnInit, NgModule } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';
import { MainpageComponent, DialogOverviewExampleDialog, RegisterDialog, AlertRegisterSuccess, AlertRegisterError, AlertLoginError } from '../mainpage.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-suite-room',
  templateUrl: './suite-room.component.html',
  styleUrls: ['./suite-room.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})


@NgModule({
  entryComponents: [
    MainpageComponent,
    DialogOverviewExampleDialog,
    RegisterDialog,
    AlertRegisterSuccess,
    AlertRegisterError,
    AlertLoginError,
  ],

})
export class SuiteRoomComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    public dialog: MatDialog,
  ) { }

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
}
