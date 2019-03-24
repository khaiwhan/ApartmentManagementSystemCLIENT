import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  displayedColumns: string[] = ['Room', 'Residents', 'TypeRoom', 'StatusUser', 'StatusRoom'];
  dataSource: MatTableDataSource<[any]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ServerService, private dialog: MatDialog) { }
  ngOnInit() {
    this.service.getDataUser().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
