import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  user;
  date = new Date();
  data;
  time;
  
  constructor(private sevice : ServerService,private session: SessionService,) { }

  ngOnInit() {
    this.time = this.date.getUTCDate() + "-" + (this.date.getMonth()+1) + "-" + (this.date.getFullYear()+543);
    this.user = this.session.getActiveUser();
    this.sevice.getDebit(this.user[0].room_id,(this.date.getMonth()+1),(this.date.getFullYear()+543)).subscribe(
      (res) => {
        this.data = res;
        
        console.log(this.time);
      },
      (err) => {
        alert(err)
      }
    )
  }
  public captureScreen()  
  {  
    console.log("sss");
    
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
      pdf.save(this.user[0].cus_fname + " " + this.user[0].cus_lname + "/" + this.date.getUTCDate() + "-" + (this.date.getMonth()+1) + "-" + this.date.getFullYear()); // Generated PDF   
    });  
  }
}
