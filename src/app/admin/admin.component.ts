import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';
import { ServerService } from '../@service/server.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user;
  totalQuestion;
  totalBook;
  constructor(
    private session:SessionService,
    private route:Router,
    private service:ServerService
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
    if(this.user[0].cus_role === "staff" && this.user[0].cus_role != null && this.user[0].cus_role !== ""){
      this.route.navigate(['/staff/staff/home'])
    }

    this.service.countQuestion().subscribe(
      (res) => {
        this.totalQuestion = res[0].total_question;
      }
    )

    this.service.getCountBook().subscribe(
      (res) => {
        this.totalBook = res[0].total_book;
      }
    )
  }
  onLogout() {
    this.session.clearActiveUser();
    this.route.navigate(['/mainpage/mainpage/home'])
  }
}
