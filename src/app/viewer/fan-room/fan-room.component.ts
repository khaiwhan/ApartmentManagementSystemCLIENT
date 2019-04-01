import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-fan-room',
  templateUrl: './fan-room.component.html',
  styleUrls: ['./fan-room.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class FanRoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
