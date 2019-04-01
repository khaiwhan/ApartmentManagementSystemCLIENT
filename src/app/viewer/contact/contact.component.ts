import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  displayedColumns: string[] = ['question', 'answer'];
  dataSource : MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public question = new FormControl('');
  user;
  constructor(
    private service:ServerService,
    private session:SessionService
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.service.viewerAskAndAnswer().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.paginator = this.paginator;
      }
    )
  }
  onSend(){
    const data = [{
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
