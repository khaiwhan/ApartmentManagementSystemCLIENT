import { Component, OnInit , ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-memberairbook',
  templateUrl: './memberairbook.component.html',
  styleUrls: ['./memberairbook.component.scss']
})
export class MemberairbookComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    
  }

}

