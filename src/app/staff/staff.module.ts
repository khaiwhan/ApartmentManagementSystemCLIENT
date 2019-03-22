import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { SliderModule } from 'angular-image-slider';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [StaffComponent, ProfileComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
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
export class StaffModule { }
