import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user;
  constructor(
    private session:SessionService,
    private route:Router
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user[0].cus_role);
    
    if(this.user == null || this.user === "" || this.user[0].cus_role !== "admin"){
      this.route.navigate(['/mainpage/mainpage/home'])
    }
    if(this.user && this.user[0].cus_role !== "admin"){
      this.route.navigate(['/mainpage/mainpage/home'])
    }
  }
  onLogout() {
    this.session.clearActiveUser();
    this.route.navigate(['/mainpage/mainpage/home'])
  }
}
