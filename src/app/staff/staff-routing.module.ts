import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { PrintComponent } from './print/print.component';
import { PrintoutComponent } from './print/printout/printout.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'staff',
    component:StaffComponent,
    children:[
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
      }
    ]
  },
  {
    path:'',
    redirectTo:'staff/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
