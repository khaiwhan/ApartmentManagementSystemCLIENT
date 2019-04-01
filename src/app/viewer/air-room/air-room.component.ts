import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-air-room',
  templateUrl: './air-room.component.html',
  styleUrls: ['./air-room.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class AirRoomComponent implements OnInit {
  noPause = true;
  constructor() { }

  ngOnInit() {
  }

}
