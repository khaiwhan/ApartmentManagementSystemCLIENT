import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { FormControl } from '@angular/forms';
import { SessionService } from 'src/app/@service/session.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('success') success: ElementRef;
  @ViewChild('error') error: ElementRef;

  public question = new FormControl('');
  room;
  user;
  constructor(
    private service: ServerService,
    private session: SessionService,
    private modalService: NgbModal,
    private router: Router,

  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.room = this.user[0].room_id;
  }
  onSend() {
    const data = [{
      room_id: this.room,
      question: this.question.value
    }]

    if (this.question.value != '') {
      this.service.Ask(data).subscribe(
        async (res) => {
          this.modalService.open(this.success)
          await delay(1000);
          this.modalService.dismissAll()
          // this.router.navigate(['member/member/home'])
          window.history.go(0)
        }
      )
    }
    // alert
    else{
      this.modalService.open(this.error)

    }
  }
}
