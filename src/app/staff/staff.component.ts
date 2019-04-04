import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  user;
  constructor(
    private session: SessionService,private route: Router
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    if(this.user == null || this.user === ""){
      this.route.navigate(['/mainpage/mainpage/home'])
    }
    if(this.user !== null || this.user !== ""){
      if(this.user[0].cus_role === "admin" && this.user[0].cus_role != null && this.user[0].cus_role !== ""){
        this.route.navigate(['/admin/admin/overview'])
      }
      if(this.user[0].cus_role === "staff" && this.user[0].cus_role != null && this.user[0].cus_role !== ""){
        this.route.navigate(['/staff/staff/overview'])
      }
      if(this.user[0].cus_role === "member" && this.user[0].cus_role != null && this.user[0].cus_role !== ""){
        this.route.navigate(['/member/member/home'])
      }
      if(this.user[0].cus_role === "viewer" && this.user[0].cus_role != null && this.user[0].cus_role !== ""){
        this.route.navigate(['/mainpage/mainpage/home'])
      }
    }
  }
  onLogout() {
    this.session.clearActiveUser();
    window.history.go(0);
  }
}
