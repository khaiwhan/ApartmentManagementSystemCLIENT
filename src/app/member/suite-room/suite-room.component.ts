import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-suite-room',
  templateUrl: './suite-room.component.html',
  styleUrls: ['./suite-room.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class SuiteRoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
