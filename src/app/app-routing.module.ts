import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'mainpage',
    loadChildren:'./mainpage/mainpage.module#MainpageModule'
  },
  {
    path:'admin',
    loadChildren:'./admin/admin.module#AdminModule'
  },
  {
    path:'staff',
    loadChildren:'./staff/staff.module#StaffModule'
  },
  {
    path:'member',
    loadChildren:'./member/member.module#MemberModule'
  },
  {
    path:'viewer',
    loadChildren:'./viewer/viewer.module#ViewerModule'
  },
  {
    path:'',
    redirectTo:'mainpage',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
