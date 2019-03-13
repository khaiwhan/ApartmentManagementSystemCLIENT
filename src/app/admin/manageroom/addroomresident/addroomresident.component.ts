import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addroomresident',
  templateUrl: './addroomresident.component.html',
  styleUrls: ['./addroomresident.component.scss']
})
export class AddroomresidentComponent implements OnInit {

  public AddRoomForm = new FormGroup({
    room_id: new FormControl(''),
    username: new FormControl(''),
    type_id: new FormControl(''),
    room_status: new FormControl(''),
    check_in: new FormControl(),
    check_out: new FormControl('')
  })
  listUsername;
  constructor(
    private service: ServerService,
    private Route: Router
  ) { }

  ngOnInit() {
    this.service.getDataUser().subscribe(
      (res) => {
        this.listUsername = res;
      }
    )
  }
  onAddRoom() {
    console.log(this.AddRoomForm.value.check_in);

    this.service.addRoomResident(this.AddRoomForm.value).subscribe(
      (res) => {
        console.log(res)
        this.Route.navigate(['admin/admin/manageroom'])
      }
    )
  }
}
