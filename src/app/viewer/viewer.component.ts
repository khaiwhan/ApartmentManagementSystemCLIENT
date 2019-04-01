import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  user: any;


  constructor(
    private session : SessionService,
    private route : Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();

    if (this.user == null || this.user === "") {
      this.route.navigate(['/mainpage/mainpage/home'])
    }
  }

  onLogout() {
    this.session.clearActiveUser();
    window.history.go(0);
  }

}
