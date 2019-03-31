import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  room_id;
  dabit_month;
  dabit_year;
  data;
  constructor(
    private sevice : ServerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.room_id = this.route.snapshot.paramMap.getAll('room_id');
    // this.dabit_month = this.route.snapshot.paramMap.getAll('dabit_month');
    // this.dabit_year = this.route.snapshot.paramMap.getAll('dabit_year');
    // this.sevice.getDebit(this.room_id,this.dabit_month,this.dabit_year).subscribe(
    //   (res) => {
    //     this.data = res;
    //     console.log(res);
    //   },
    //   (err) => {
    //     alert(err)
    //   }
    // )
    
  }

  

}
