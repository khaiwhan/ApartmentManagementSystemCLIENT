import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fanbook',
  templateUrl: './fanbook.component.html',
  styleUrls: ['./fanbook.component.scss']
})
export class FanbookComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  constructor() { }

  ngOnInit() {
  }

}
