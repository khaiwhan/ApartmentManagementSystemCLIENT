import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SliderModule } from 'angular-image-slider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material';
import { OverviewComponent } from './overview/overview.component';
import { ManageroomComponent } from './manageroom/manageroom.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { AddroomresidentComponent } from './manageroom/addroomresident/addroomresident.component';
import { EditroomresidentComponent } from './manageroom/editroomresident/editroomresident.component';

@NgModule({
  declarations: [
    AdminComponent,
    OverviewComponent,
    ManageroomComponent,
    ManageuserComponent,
    AddroomresidentComponent,
    EditroomresidentComponent,
  ],
  entryComponents:[
    AdminComponent,
    OverviewComponent,
    ManageuserComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SliderModule,
    AngularFontAwesomeModule
  ]
})
export class AdminModule { }
