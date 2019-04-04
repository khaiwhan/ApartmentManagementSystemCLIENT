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
import { PrintComponent } from './print/print.component';
import { PrintoutComponent } from './print/printout/printout.component';
import { HomeComponent } from './home/home.component';
import { ManageroomComponent } from './manageroom/manageroom.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WaterComponent } from './water/water.component';
import { ReplyComponent } from './reply/reply.component';
import { RecieptComponent } from './reciept/reciept.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [StaffComponent, ProfileComponent, PrintComponent, PrintoutComponent, HomeComponent, ManageroomComponent, ManageuserComponent, NotificationsComponent, WaterComponent, ReplyComponent, RecieptComponent, OverviewComponent],
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
