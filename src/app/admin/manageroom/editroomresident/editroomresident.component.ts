import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editroomresident',
  templateUrl: './editroomresident.component.html',
  styleUrls: ['./editroomresident.component.scss']
})
export class EditroomresidentComponent implements OnInit {

  room_id;
  username;
  type_id;
  room_status;
  check_in;
  check_out;
  listUsername;
  public updateRoom = new FormGroup({
    update_room_id:new FormControl(''),
    update_username:new FormControl(''),
    update_type_id:new FormControl(''),
    update_room_status:new FormControl(''),
    update_check_in:new FormControl(''),
    update_check_out:new FormControl('')
  })

  constructor(private service:ServerService,private router:Router,private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.room_id = this.route.snapshot.paramMap.getAll('room_id');
    this.username = this.route.snapshot.paramMap.getAll('username');
    this.type_id = this.route.snapshot.paramMap.getAll('type_id');
    this.room_status = this.route.snapshot.paramMap.getAll('room_status');
    this.check_in = this.route.snapshot.paramMap.getAll('check_in');
    this.check_out = this.route.snapshot.paramMap.getAll('check_out');
    console.log(this.room_id,this.room_status[0],this.username[0],this.type_id[0],this.check_in[0],this.check_out[0])
    this.service.getDataUser().subscribe(
      (res) => {
        this.listUsername = res;
      }
    )
    
  }
  onEditRoom(){
    console.log(this.updateRoom.value);
    
    this.service.updateRoomResident(this.updateRoom.value).subscribe(
      (res) => {
        this.router.navigate(['admin/admin/manageroom'])
      }
    )
  }

}
