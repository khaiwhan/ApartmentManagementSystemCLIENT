import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { HomeComponent } from './home/home.component';
import { AriRoomComponent } from './ari-room/ari-room.component';
import { FanRoomComponent } from './fan-room/fan-room.component';
import { SuiteRoomComponent } from './suite-room/suite-room.component';
import { ContactComponent } from './contact/contact.component';
import { AirBookComponent } from './ari-room/air-book/air-book.component';
import { compileComponent } from '@angular/core/src/render3/jit/directive';
import { FanbookComponent } from './fan-room/fanbook/fanbook.component';
import { SuitebookComponent } from './suite-room/suitebook/suitebook.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path:'mainpage',
    component:MainpageComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'airroom',
        component:AriRoomComponent,
        children:[
          {
            path: 'viewair',
            component: AirBookComponent,
          }
        ]
      },
      {
        path:'fanroom',
        component:FanRoomComponent,
        children:[
          {
            path: 'viewfan',
            component: FanbookComponent,
          }
        ]
      },
      {
        path:'suiteroom',
        component:SuiteRoomComponent,
        children:[
          {
            path: 'viewsuite',
            component: SuitebookComponent,
          }
        ]
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'airbookroom',
        component:AirBookComponent
      },
      {
        path:'history',
        component:HistoryComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'mainpage/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
