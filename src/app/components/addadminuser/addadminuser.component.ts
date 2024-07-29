import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AdminUserAPI } from 'src/app/models/adminuser.model';
import { AdminUserAPIService } from 'src/app/services/adminuserAPI.service';

@Component({
  templateUrl: './addadminuser.component.html'
  
})
export class AddAdminUserComponent implements OnInit {
  AdminUserForm: FormGroup;
  adminUser:AdminUserAPI[];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private adminuserAPIService: AdminUserAPIService,
  ) { }
  ngOnInit() {
    this.AdminUserForm = this.formBuilder.group({
      taiKhoan:'',
      matKhau:''
    });
  }
  save(){
    var adminUser: AdminUserAPI = this.AdminUserForm.value as AdminUserAPI;
    this.adminuserAPIService.create(adminUser).then(
      res => {
        var result: any = res as any;
        if (result.status) {
          this.router.navigate(['/adminuser'])
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'failed',
            detail: 'Add Failed'
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
