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
    SuiteRoomComponent
  ],
  entryComponents: [
    MainpageComponent,
    DialogOverviewExampleDialog,
    RegisterDialog,
    AlertRegisterSuccess,
    AlertRegisterError,
    AlertLoginError
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
    AngularFontAwesomeModule
  ],
  providers:[ServerService]

})
export class MainpageModule { }
