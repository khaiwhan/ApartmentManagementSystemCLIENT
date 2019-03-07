import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'mainpage',
    component:MainpageComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
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
