import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.scss']
})
export class RecieptComponent implements OnInit {

  displayedColumns: string[] = ['room_id','username', 'dabit_month', 'dabit_year', 'receipt_date','receipt_bill','icon'];
  dataSource: MatTableDataSource<[any]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  receipt_data;



  // private receipt_data = new FormControl('')
  constructor(
    private service: ServerService,
    private modalService: NgbModal,
  ) { }


  ngOnInit() {
    this.getReceiptTable();
  }

  getReceiptTable() {
    this.service.getReceipt().subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res as any[]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        // console.log(res);

      }
    )
  }

  //Filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openModal
  openModalReceipt(data, modal) {
    this.receipt_data = data;
    console.log(this.receipt_data);
    this.modalService.open(modal, { centered: true })
  }
  closeModal() {
    this.modalService.dismissAll();
  }

  // onUpdateReceipt() {
  
  //   this.service.updateReceipt(data).subscribe(
  //     (res) => {
  //       this.getReceiptTable();
  //       this.closeModal();
  //     }
  //   )
  // }
  onUpdateReceipt() {
    const data = [{
      dabit_id: (this.receipt_data)
    }]
    console.log(data)
    this.service.updateReceipt(data).subscribe(
      (res) => {
        this.getReceiptTable();
        this.closeModal();
      }
    )
  }
  

}
