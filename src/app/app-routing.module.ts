import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'mainpage',
    loadChildren:'./mainpage/mainpage.module#MainpageModule'
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
