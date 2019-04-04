import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { PrintComponent } from './print/print.component';
import { PrintoutComponent } from './print/printout/printout.component';
import { HomeComponent } from './home/home.component';
import { ReplyComponent } from './reply/reply.component';
import { ManageroomComponent } from './manageroom/manageroom.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { WaterComponent } from './water/water.component';
import { RecieptComponent } from './reciept/reciept.component';
import { OverviewComponent } from './overview/overview.component';


const routes: Routes = [
  {
    path: 'staff',
    component: StaffComponent,
    children: [
      {
        path:'print',
        component:PrintComponent,
        children:[
          {
            path:'printout/:roomm',
            component:PrintoutComponent
          }
        ]
      },
      {
        path:'home',
        component:HomeComponent
      },

      {
        path: 'reply',
        component: ReplyComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'manageroom',
        component: ManageroomComponent
      },
      // {
      //   path: 'addroomresident',
      //   component: AddroomresidentComponent
      // },
      // {
      //   path: 'editroomresident/:room_id',
      //   component: EditroomresidentComponent
      // },
      {
        path: 'manageuser',
        component: ManageuserComponent
      },
      {
        path: 'notitications',
        component: NotificationsComponent
      },
      {
        path: 'water',
        component: WaterComponent,

      },
      // {
      //   path: 'print',
      //   component: PrintComponent,
      //   children: [
      //     {
      //       path: 'printout/:roomm/:month/:year',
      //       component: PrintoutComponent
      //     }

      //   ]
      // },
      {
        path: 'receipt',
        component: RecieptComponent,

      },
    ]
  },
  {
    path: '',
    redirectTo: 'staff/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
