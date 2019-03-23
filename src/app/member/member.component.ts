import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  hide = true;
  hide1 = true;
  user;
  
  constructor(
    public dialog: MatDialog,
    private session: SessionService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user)
    
    if(this.user == null || this.user === ""){
      this.route.navigate(['/mainpage/mainpage/home'])
    }
    if(this.user !== null || this.user !== ""){
      if(this.user[0].cus_role === "admin" && this.user[0].cus_role != null && this.user[0].cus_role !== ""){
        this.route.navigate(['/admin/admin/overview'])
      }
      if(this.user[0].cus_role === "staff" && this.user[0].cus_role != null && this.user[0].cus_role !== ""){
        this.route.navigate(['/staff/staff/home'])
      }
    }
    
  }
  onLogout() {
    this.session.clearActiveUser();
    window.history.go(0);
  }

}
