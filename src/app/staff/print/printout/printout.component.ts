import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-printout',
  templateUrl: './printout.component.html',
  styleUrls: ['./printout.component.scss']
})
export class PrintoutComponent implements OnInit {
  listRent;
  room;
  date = new Date();
  data;
  time;
  constructor(
    private sevice : ServerService,
    private route: ActivatedRoute
  ) { }

  
  ngOnInit() {
    this.room = this.route.snapshot.paramMap.getAll('roomm');
    this.time = this.date.getUTCDate() + "-" + (this.date.getMonth()+1) + "-" + (this.date.getFullYear()+543);
    
    this.sevice.getDebit(this.room,(this.date.getMonth()+1),(this.date.getFullYear()+543)).subscribe(
      (res) => {
        this.data = res;
        
        console.log(this.time);
      },
      (err) => {
        alert(err)
      }
    )

    // this.sevice.getRent().subscribe(
    //   (res) => {
    //     console.log(res);
        
    //     this.listRent = res;
    //   }
    // )
  }

  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 10;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save(this.room + "_" + this.time); // Generated PDF   
    });  
  }  
}
