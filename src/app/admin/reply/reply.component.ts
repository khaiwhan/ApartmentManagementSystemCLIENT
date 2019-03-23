import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerService } from 'src/app/@service/server.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit {
  displayedColumns: string[] = ['room', 'question', 'reply'];
  dataSource : MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  contact_id;
  question;
  public answer = new FormControl('')
  constructor(
    private modalService:NgbModal,
    private service:ServerService
  ) { }

  ngOnInit() {
    this.service.getQuestion().subscribe(
      (res) => {
        console.log(res);
        
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.paginator = this.paginator;
      }
    )
  }
  openModalReply(data,modal) {
    this.contact_id = data.contact_id;
    this.question = data.question;
    this.modalService.open(modal, { centered: true })
  }
  onReply(){
    const data = [
      {
        contact_id:this.contact_id,
        answer:this.answer.value
      }
    ]
    console.log(data);
    
    this.service.Answer(data).subscribe(
      (res) => {
        this.modalService.dismissAll();
        window.history.go(0);
      }
    )
  }
}

