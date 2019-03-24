import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suitebook',
  templateUrl: './suitebook.component.html',
  styleUrls: ['./suitebook.component.scss']
})
export class SuitebookComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  displayedColumns: string[] = ['room_id', 'type_room', 'room_status', 'book'];
  dataSource: MatTableDataSource<[any]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private service: ServerService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getSuiteTable()
  }

  getSuiteTable() {
    this.service.getSuitena().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  openModalsuiteroom(data, modal) {
    this.modalService.open(modal, { centered: true })
  }
  closeModal() {
    this.modalService.dismissAll();
  }

}
