import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent, DialogOverviewExampleDialog, RegisterDialog, AlertRegisterSuccess, AlertRegisterError, AlertLoginError } from './mainpage.component';
import { MaterialModule } from '../material';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { SliderModule } from 'angular-image-slider';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServerService } from '../@service/server.service';
import { AriRoomComponent } from './ari-room/ari-room.component';
import { FanRoomComponent } from './fan-room/fan-room.component';
import { SuiteRoomComponent } from './suite-room/suite-room.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ContactComponent } from './contact/contact.component';

import { AirBookComponent } from './ari-room/air-book/air-book.component';
import { FanbookComponent } from './fan-room/fanbook/fanbook.component';
import { SuitebookComponent } from './suite-room/suitebook/suitebook.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    MainpageComponent,
    HomeComponent,
    DialogOverviewExampleDialog,
    RegisterDialog,
    AlertRegisterSuccess,
    AlertRegisterError,
    AlertLoginError,
    AriRoomComponent,
    FanRoomComponent,
    SuiteRoomComponent,
    ContactComponent,
    
    AirBookComponent,
    
    FanbookComponent,
    
    SuitebookComponent,
    
    HistoryComponent,
  ],
  entryComponents: [
    MainpageComponent,
    DialogOverviewExampleDialog,
    RegisterDialog,
    AlertRegisterSuccess,
    AlertRegisterError,
    AlertLoginError,
  ],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SliderModule,
    AngularFontAwesomeModule,
    CarouselModule.forRoot()
  ],
  providers:[ServerService,{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]

})
export class MainpageModule { }
