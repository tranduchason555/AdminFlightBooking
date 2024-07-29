import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminUserAPI } from 'src/app/models/adminuser.model';
import { AdminUserAPIService } from 'src/app/services/adminuserAPI.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  taiKhoan: string;
  matKhau: string;
  adminUsers:AdminUserAPI[];
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService, 
    private router:Router,
    private adminUserAPIService:AdminUserAPIService
  ){}
  ngOnInit() {
    // this.adminUserAPIService.findAll().then(
    //   res => {
         
    //      console.log(this.adminUsers);
    //   },
    //   err => {
    //       console.log(err);
    //   }
    //  );
  }
  login() {
    this.adminUserAPIService.login(this.taiKhoan,this.matKhau).then(
      res=>{
        var result: any = res as any;
        console.log(result);
        if (result) {
          this.router.navigate(['dashboard'])
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'failed',
            detail: 'Add Failed'
          });
        }
        
        
      },
      err=>[
          console.log("Lỗi")
      ]
    )
 
  }
  
}
