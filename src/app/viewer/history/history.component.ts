import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { delay } from 'q';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['type_room', 'room_id', 'book_in', 'book_out', 'book_date', 'delete'];
  dataSource: MatTableDataSource<[any]>;
  sort: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('success') success: ElementRef;

  user;

  deleteBook;

  constructor(
    private modalService: NgbModal,
    private service: ServerService,
    private session: SessionService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.getHistoryTable()
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  closeModal() {
    this.modalService.dismissAll();
  }

  getHistoryTable() {
    this.service.getHistory().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  //delete Book
  openModalDeleteUser(data, modal) {
    console.log(data);
    this.deleteBook = data.book_id;
    this.modalService.open(modal, { centered: true })
  }
  onDeleteBook() {

    console.log(this.deleteBook);

    this.service.deleteBook(this.deleteBook).subscribe(
      async (res) => {
        this.modalService.open(this.success)
        this.getHistoryTable();
        await delay(1000);
        this.closeModal();
      }
    )
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
