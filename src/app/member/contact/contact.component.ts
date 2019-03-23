import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { FormControl } from '@angular/forms';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public question = new FormControl('');
  room;
  user;
  constructor(
    private service:ServerService,
    private session:SessionService
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.room = this.user[0].room_id;
  }
  onSend(){
    const data = [{
      room_id:this.room,
      question:this.question.value
    }]
    this.service.Ask(data).subscribe(
      (res) => {
        alert("Send Question Success")
        window.history.go(0)
      }
    )
  }
}
