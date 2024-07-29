import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SanBay } from 'src/app/models/sanbay.model';
import { SanBayAPIService } from 'src/app/services/sanbayAPI.service';

@Component({
  templateUrl: './sanbay.component.html'
})
export class SanBayComponent implements OnInit {
    constructor(
        private sanbayAPIService:SanBayAPIService,
        private router: Router,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private formBuilder: FormBuilder,
    ){}
    searchByName:FormGroup
    sanbays:SanBay[];
    search(){
        var tenTinhThanh: string = this.searchByName.value.tenTinhThanh;
        this.sanbayAPIService.find2(tenTinhThanh).then(
          res => {
              this.sanbays = res as SanBay[]; 
              console.log(this.sanbays);
              
          },
          err => {
              console.log(err);
          }
         );
         if(tenTinhThanh=='' ) {
            this.sanbayAPIService.findAll().then(
                res => {
                    this.sanbays = res as SanBay[]; 
                   console.log(this.sanbays);
                },
                err => {
                    console.log(err);
                }
               );
         }
         

    }
  ngOnInit() {
    this.searchByName = this.formBuilder.group({
        tenTinhThanh: ''
      });
    this.sanbayAPIService.findAll().then(
        res => {
            this.sanbays = res as SanBay[]; 
           console.log(this.sanbays);
        },
        err => {
            console.log(err);
        }
       );

  }
  delete(maSbay: string) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.sanbayAPIService.delete(maSbay).then(
                res => {
                    var result: any = res as any;
                    if (result.status) {
                        this.messageService.add({
                            severity: 'success',
                            detail: 'Done'
                        });
                        this.sanbayAPIService.findAll().then(
                            res => {
                                this.sanbays = res as SanBay[];
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
