import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-suitebook',
  templateUrl: './suitebook.component.html',
  styleUrls: ['./suitebook.component.scss']
})
export class SuitebookComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  
  constructor() { }

  ngOnInit() {
  }

}
