import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-printout',
  templateUrl: './printout.component.html',
  styleUrls: ['./printout.component.scss']
})
export class PrintoutComponent implements OnInit {
  listRent;

  constructor(
    private sevice : ServerService
  ) { }

  
  ngOnInit() {
    this.sevice.getRent().subscribe(
      (res) => {
        console.log(res);
        
        this.listRent = res;
      }
    )
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
      pdf.save("test"); // Generated PDF   
    });  
  }  
}
