import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  rooms;

  roomm = new FormControl('');
  constructor(
    private service: ServerService
  ) { }

  ngOnInit() {
    this.service.getRoom().subscribe(
      (res) => {
        console.log(res);

        this.rooms = res;
      }
    )
  }


}
