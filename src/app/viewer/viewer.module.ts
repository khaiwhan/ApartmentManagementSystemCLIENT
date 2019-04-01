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
import { CarouselModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SliderModule } from 'angular-image-slider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [ViewerComponent, HomeComponent, ContactComponent, AirRoomComponent, FanRoomComponent, SuiteRoomComponent, AirBookComponent, FanBookComponent, SuiteBookComponent, HistoryComponent],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SliderModule,
    AngularFontAwesomeModule,
    CarouselModule.forRoot()
  ]
})
export class ViewerModule { }
