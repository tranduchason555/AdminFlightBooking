import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AdminUserAPI } from 'src/app/models/adminuser.model';
import { AdminUserAPIService } from 'src/app/services/adminuserAPI.service';

@Component({
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminUserComponent implements OnInit {
    adminusers:AdminUserAPI[];
    constructor(
      private router: Router,
      private messageService: MessageService,
      private confirmationService: ConfirmationService,
        private adminuserAPIService:AdminUserAPIService,
     
      ){}
  ngOnInit() {
    this.adminuserAPIService.findAll().then(
        res => {
            this.adminusers = res as AdminUserAPI[]; 
           console.log(this.adminusers);
        },
        err => {
            console.log(err);
        }
       );

  }
  delete(id: number) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.adminuserAPIService.delete(id).then(
                res => {
                    var result: any = res as any;
                    if (result.status) {
                        this.messageService.add({
                            severity: 'success',
                            detail: 'Done'
                        });
                        this.adminuserAPIService.findAll().then(
                            res => {
                                this.adminusers = res as AdminUserAPI[];
                            },
                            err => {
                                console.log(err);
                            }
                        );
                    } else {
                        this.messageService.add({
                            severity: 'error',
                            detail: 'Failed'
                        });
                    }
                },
                err => {
                    this.messageService.add({
                        severity: 'error',
                        detail: err
                    });
                }
            );
        },
        reject: (type) => {

        }
    });
}
}
