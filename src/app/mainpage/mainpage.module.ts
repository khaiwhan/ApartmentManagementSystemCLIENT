import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { MainpageComponent, DialogOverviewExampleDialog, RegisterDialog } from './mainpage.component';
import { MaterialModule } from '../material';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { SliderModule } from 'angular-image-slider';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ServerService } from '../@service/server.service';

@NgModule({
  declarations: [MainpageComponent, HomeComponent, DialogOverviewExampleDialog, RegisterDialog],
  entryComponents: [MainpageComponent, DialogOverviewExampleDialog , RegisterDialog],
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
