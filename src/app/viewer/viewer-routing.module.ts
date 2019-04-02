import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewerComponent } from './viewer.component';
import { HomeComponent } from './home/home.component';
import { AirRoomComponent } from './air-room/air-room.component';
import { AirBookComponent } from './air-room/air-book/air-book.component';
import { FanRoomComponent } from './fan-room/fan-room.component';
import { FanBookComponent } from './fan-room/fan-book/fan-book.component';
import { SuiteRoomComponent } from './suite-room/suite-room.component';
import { SuiteBookComponent } from './suite-room/suite-book/suite-book.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [

  {
    path: 'viewer',
    component: ViewerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'airroom',
        component: AirRoomComponent,
        children: [
          {
            path: 'viewair',
            component: AirBookComponent,
          }
        ]
      },
      {
        path: 'fanroom',
        component: FanRoomComponent,
        children: [
          {
            path: 'viewfan',
            component: FanBookComponent,
          }
        ]
      },
      {
        path: 'suiteroom',
        component: SuiteRoomComponent,
        children: [
          {
            path: 'viewsuite',
            component: SuiteBookComponent,
          }
        ]
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'airbookroom',
        component: AirBookComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'viewer/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerRoutingModule { }
