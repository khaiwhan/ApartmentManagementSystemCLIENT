import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { HomeComponent } from './home/home.component';
import { AriRoomComponent } from './ari-room/ari-room.component';
import { FanRoomComponent } from './fan-room/fan-room.component';
import { SuiteRoomComponent } from './suite-room/suite-room.component';

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
        component:AriRoomComponent
      },
      {
        path:'fanroom',
        component:FanRoomComponent
      },
      {
        path:'suiteroom',
        component:SuiteRoomComponent
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
