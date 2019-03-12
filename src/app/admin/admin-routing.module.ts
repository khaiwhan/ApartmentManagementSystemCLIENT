import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OverviewComponent } from './overview/overview.component';
import { ManageroomComponent } from './manageroom/manageroom.component';
import { ManageuserComponent } from './manageuser/manageuser.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'overview',
        component:OverviewComponent
      },
      {
        path:'manageroom',
        component:ManageroomComponent
      },
      {
        path:'manageuser',
        component:ManageuserComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'admin/home',
    pathMatch:'admin'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
