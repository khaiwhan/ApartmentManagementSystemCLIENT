import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-ari-room',
  templateUrl: './ari-room.component.html',
  styleUrls: ['./ari-room.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class AriRoomComponent implements OnInit {
  noPause = true;
  constructor() { }

  ngOnInit() {
  }

}
