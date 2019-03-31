import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OverviewComponent } from './overview/overview.component';
import { ManageroomComponent } from './manageroom/manageroom.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { AddroomresidentComponent } from './manageroom/addroomresident/addroomresident.component';
import { EditroomresidentComponent } from './manageroom/editroomresident/editroomresident.component';
import { NotiticationsComponent } from './notitications/notitications.component';
import { ContactComponent } from './contact/contact.component';
import { WaterComponent } from './water/water.component';
import { PrintComponent } from './print/print.component';
import { PrintoutComponent } from './print/printout/printout.component';
import { ReplyComponent } from './reply/reply.component';
import { InfomationComponent } from './infomation/infomation.component';
import { FacilityComponent } from './facility/facility.component';
import { RecieptComponent } from './reciept/reciept.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'facility',
        component: FacilityComponent
      },
      {
        path: 'info',
        component: InfomationComponent
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
      {
        path: 'addroomresident',
        component: AddroomresidentComponent
      },
      {
        path: 'editroomresident/:room_id/:username/:type_id/:room_status/:check_in/:check_out',
        component: EditroomresidentComponent
      },
      {
        path: 'manageuser',
        component: ManageuserComponent
      },
      {
        path: 'notitications',
        component: NotiticationsComponent
      },
      {
        path: 'contact',
        component: ContactComponent,

      },

      {
        path: 'water',
        component: WaterComponent,

      },
      {
        path: 'print',
        component: PrintComponent,
        children: [
          {
            path: 'printout/:roomm/:month/:year',
            component: PrintoutComponent
          }

        ]
      },
      {
        path: 'receipt',
        component: RecieptComponent,
        
      },
      
    ]
  },
  {
    path: '',
    redirectTo: 'admin/home',
    pathMatch: 'admin'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
