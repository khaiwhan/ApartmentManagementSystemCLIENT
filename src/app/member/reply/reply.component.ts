import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, TooltipPosition } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';


@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})


  

export class ReplyComponent implements OnInit {
  displayedColumns: string[] = ['question','answer','delete'];
  dataSource : MatTableDataSource<any>
  user;
  contact_id;
  constructor(
    private modalService: NgbModal,
    private service:ServerService,
    private session:SessionService
  ) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.service.memberGetQuestion(this.user[0].room_id).subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  onDelete(data, modal) {
    this.contact_id = data.contact_id
    this.modalService.open(modal, { centered: true })
  }
  onDeleteQuestion(){
    this.service.memberDeleteQuestion(this.contact_id).subscribe(
      (res) => {
        alert("Delete Success")
        window.history.go(0)
      }
    )
  }

  
}
