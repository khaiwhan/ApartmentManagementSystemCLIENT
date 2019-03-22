import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { SliderModule } from 'angular-image-slider';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselModule } from 'ngx-bootstrap';
import { AirRoomComponent } from './air-room/air-room.component';
import { ContactComponent } from './contact/contact.component';
import { FanRoomComponent } from './fan-room/fan-room.component';
import { SuiteRoomComponent } from './suite-room/suite-room.component';
import { InfoComponent } from './info/info.component';
import { ServerService } from '../@service/server.service';
import { ProfileComponent } from './profile/profile.component';
import { ReplyComponent } from './reply/reply.component';
import { MemberairbookComponent } from './air-room/memberairbook/memberairbook.component';
import { MemberfanbookComponent } from './fan-room/memberfanbook/memberfanbook.component';
import { MembersuitebookComponent } from './suite-room/membersuitebook/membersuitebook.component';



@NgModule({
  declarations: [MemberComponent, HomeComponent, AirRoomComponent, ContactComponent, FanRoomComponent, SuiteRoomComponent, InfoComponent, ProfileComponent, ReplyComponent, MemberairbookComponent, MemberfanbookComponent, MembersuitebookComponent, ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    SliderModule,
    AngularFontAwesomeModule,
    CarouselModule.forRoot()
  ],
  providers:[ServerService]
})
export class MemberModule { }
