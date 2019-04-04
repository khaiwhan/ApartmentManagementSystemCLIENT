import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { FormControl, FormGroup } from '@angular/forms';
import { delay } from 'q';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  listRent;
  user;

  dataSource: MatTableDataSource<[any]>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('success') success: ElementRef;
  sort;

  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private router: Router,
  ) { }

  username;
  password;
  cus_fname;
  cus_lname;
  email;
  cus_sex;
  cus_phone;
  cus_addr;
  data;
  listUsername;

  public updateUser = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    cus_fname: new FormControl(''),
    cus_lname: new FormControl(''),
    email: new FormControl(''),
    cus_sex: new FormControl(''),
    cus_phone: new FormControl(''),
    cus_addr: new FormControl(''),
  })
  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.service.Profile(this.user[0].username).subscribe(
      (res) => {
        // console.log(res);
        this.username = res[0].username;
        this.password = res[0].password;
        this.cus_fname = res[0].cus_fname;
        this.cus_lname = res[0].cus_lname;
        this.email = res[0].email;
        this.cus_sex = res[0].cus_sex;
        this.cus_phone = res[0].cus_phone;
        this.cus_addr = res[0].cus_addr;
      }
    )
    // console.log(this.user);

  }

  onUpdateUser() {
    console.log(this.updateUser.value)
    this.service.editProfile(this.updateUser.value).subscribe(
      async (res) => {
        this.modalService.open(this.success)
        await delay(1000);
        this.modalService.dismissAll()
        this.router.navigate(['member/member/home'])

      }
    )
  }
}
