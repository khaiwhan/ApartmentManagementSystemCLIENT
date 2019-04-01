import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imagesUrl;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      '../../../assets/air-room.jpg',
      '../../../assets/air-room1.jpg',
      '../../../assets/fan-room.jpg',
      '../../../assets/sute-room.jpg',
      ];
  }

}
