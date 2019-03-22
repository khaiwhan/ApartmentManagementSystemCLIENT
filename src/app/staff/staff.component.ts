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
  }

}
