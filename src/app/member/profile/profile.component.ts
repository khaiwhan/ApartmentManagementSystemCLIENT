import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  listRent;
  constructor(
    private sevice : ServerService
  ) { }

  ngOnInit() {
    this.sevice.getRent().subscribe(
      (res) => {
        console.log(res);
        
        this.listRent = res;
      }
    )
  }

}
