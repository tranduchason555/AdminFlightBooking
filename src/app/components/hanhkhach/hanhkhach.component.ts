import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';

@Component({
  templateUrl: './hanhkhach.component.html'
})
export class HanhKhachComponent implements OnInit {
    hanhkhachs:HanhKhachAPI[];
    constructor(
        private hanhkhachAPIService:HanhKhachAPIService,
        private router: Router,
 private messageService: MessageService,
 private confirmationService: ConfirmationService,
 private formBuilder: FormBuilder
    ){}
    searchByName:FormGroup
  ngOnInit() {
    this.hanhkhachAPIService.findAll().then(
        res => {
            this.hanhkhachs = res as HanhKhachAPI[]; 
           console.log(this.hanhkhachs);
        },
        err => {
            console.log(err);
        }
       );
       this.searchByName = this.formBuilder.group({
        tenHanhKhach: ''
      });
  }
  search(){
    var tenHanhKhach: string = this.searchByName.value.tenHanhKhach;
    this.hanhkhachAPIService.find2(tenHanhKhach).then(
      res => {
          this.hanhkhachs = res as HanhKhachAPI[]; 
          console.log(this.hanhkhachs);
          
      },
      err => {
          console.log(err);
      }
     );
     if(tenHanhKhach=='' ) {
        this.hanhkhachAPIService.findAll().then(
            res => {
                this.hanhkhachs = res as HanhKhachAPI[]; 
               console.log(this.hanhkhachs);
            },
            err => {
                console.log(err);
            }
           );
     }
     

  }
  
  delete(maHk: number) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.hanhkhachAPIService.delete(maHk).then(
                res => {
                    var result: any = res as any;
                    if (result.status) {
                        this.messageService.add({
                            severity: 'success',
                            detail: 'Done'
                        });
                        this.hanhkhachAPIService.findAll().then(
                            res => {
                                this.hanhkhachs = res as HanhKhachAPI[];
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
