import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewerComponent } from './viewer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AirRoomComponent } from './air-room/air-room.component';
import { FanRoomComponent } from './fan-room/fan-room.component';
import { SuiteRoomComponent } from './suite-room/suite-room.component';
import { AirBookComponent } from './air-room/air-book/air-book.component';
import { FanBookComponent } from './fan-room/fan-book/fan-book.component';
import { SuiteBookComponent } from './suite-room/suite-book/suite-book.component';


@NgModule({
  declarations: [ViewerComponent, HomeComponent, ContactComponent, AirRoomComponent, FanRoomComponent, SuiteRoomComponent, AirBookComponent, FanBookComponent, SuiteBookComponent],
  imports: [
    CommonModule,
    ViewerRoutingModule
  ]
})
export class ViewerModule { }
