import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'q';

@Component({
  selector: 'app-editroomresident',
  templateUrl: './editroomresident.component.html',
  styleUrls: ['./editroomresident.component.scss']
})
export class EditroomresidentComponent implements OnInit {
  @ViewChild('success') success: ElementRef;

  room_id;
  username;
  type_id;
  room_status;
  check_in;
  check_out;
  listUsername;
  room;
  public updateRoom = new FormGroup({
    update_room_id:new FormControl(''),
    update_username:new FormControl(''),
    update_type_id:new FormControl(''),
    update_room_status:new FormControl(''),
    update_check_in:new FormControl(''),
    update_check_out:new FormControl('')
  })

  constructor(
    private service:ServerService,
    private router:Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,) { 
  }

  ngOnInit() {
    this.room_id = this.route.snapshot.paramMap.getAll('room_id');
    this.username = this.route.snapshot.paramMap.getAll('username');
    this.type_id = this.route.snapshot.paramMap.getAll('type_id');
    this.room_status = this.route.snapshot.paramMap.getAll('room_status');
    this.check_in = this.route.snapshot.paramMap.getAll('check_in');
    this.check_out = this.route.snapshot.paramMap.getAll('check_out');
    console.log('-----',this.room_id,this.room_status[0],this.username[0],this.type_id[0],this.check_in[0],this.check_out[0])
    this.service.getCustomer().subscribe(
      (res) => {
        this.listUsername = res;
      }
    )
    this.room = this.route.snapshot.paramMap.getAll('room_id');
    this.service.getManageroom(this.room[0].room_id).subscribe(
      (res) => {
        console.log(res);
        this.room_id = res[0].room_id;
        this.username = res[0].username;
        this.type_id = res[0].type_id;
        this.room_status = res[0].room_status;
        this.check_in = res[0].check_in;
        this.check_out = res[0].check_out;
        
      }
    )
    // console.log(this.user);

  }
  onEditRoom(){
    console.log(this.updateRoom.value);
    
    this.service.updateRoomResident(this.updateRoom.value).subscribe(
      async (res) => {
        this.onUpdateVtoM();
        this.modalService.open(this.success)        
        await delay(1000);
        this.modalService.dismissAll();
        this.router.navigate(['admin/admin/manageroom'])
      }
    )
  }
  onUpdateVtoM() {
    const data = [{
      username: (this.username)
    }]
    console.log(data[0])
    this.service.updateViewToMember(data[0]).subscribe(
       (res) => {
       
        this.router.navigate(['admin/admin/manageroom'])
       
      }
    )
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
