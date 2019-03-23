import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AirRoomComponent } from './air-room/air-room.component';
import { FanRoomComponent } from './fan-room/fan-room.component';
import { SuiteRoomComponent } from './suite-room/suite-room.component';
import { InfoComponent } from './info/info.component';
import { ProfileComponent } from './profile/profile.component';
import { ReplyComponent } from './reply/reply.component';
import { AirBookComponent } from '../mainpage/ari-room/air-book/air-book.component';
import { MemberairbookComponent } from './air-room/memberairbook/memberairbook.component';
import { MemberfanbookComponent } from './fan-room/memberfanbook/memberfanbook.component';
import { MembersuitebookComponent } from './suite-room/membersuitebook/membersuitebook.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
  {
    path: 'member',
    component: MemberComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'airroom',
        component: AirRoomComponent,
        children:[  
          {
          path: 'memberairbook',
          component: MemberairbookComponent
         }

        ]
        
      },
      {
        path: 'fanroom',
        component: FanRoomComponent,
        children:[  
          {
          path: 'memberfanbook',
          component: MemberfanbookComponent
         }

        ]
      },
      {
        path: 'suiteroom',
        component: SuiteRoomComponent,
        children:[  
          {
          path: 'membersuitebook',
          component: MembersuitebookComponent
         }

        ]
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'reply',
        component: ReplyComponent
      },
      {
        path:'print',
        component:PrintComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
