import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';

@Component({
  templateUrl: './thongtinchuyenbay.component.html'
})
export class ThongTinChuyenBayComponent implements OnInit {
    thongtinchuyenbays:ThongTinChuyenBay[];
    findByDates:FormGroup
    constructor(
        private thongtinchuyenbayAPIService:ThongTinChuyenBayAPIService,
        private router: Router,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private formBuilder: FormBuilder,
      ){}
      search(){
        var ngayCatCanh: string = this.findByDates.value.ngayCatCanh;
        var ngayHaCanh: string = this.findByDates.value.ngayHaCanh;
        if(ngayCatCanh != null && ngayHaCanh != null){
            this.thongtinchuyenbayAPIService.findByDates1(ngayCatCanh,ngayHaCanh).then(
                res => {
                    this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
                    for(var i=0;i<this.thongtinchuyenbays.length;i++){
                      console.log(this.thongtinchuyenbays[i].ngayCatCanh);
                    }    
                },
                err => {
                    console.log(err);
                }
               );
        } if(ngayHaCanh == '' && ngayCatCanh !=null){
            this.thongtinchuyenbayAPIService.findByDates(ngayCatCanh).then(
                res => {
                    this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
                    for(var i=0;i<this.thongtinchuyenbays.length;i++){
                      console.log(this.thongtinchuyenbays[i].ngayCatCanh);
                    }    
                },
                err => {
                    console.log(err);
                }
               );
        }
        // else if(ngayCatCanh=='' || ngayHaCanh=='' || ngayCatCanh=='' && ngayHaCanh=='') {
        //     this.thongtinchuyenbayAPIService.findAll().then(
        //         res => {
        //             this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
        //             console.log(this.thongtinchuyenbays);
        //         },
        //         err => {
        //             console.log(err);
        //         }
        //        );
        //  }
         
      }
  ngOnInit() {
    this.findByDates = this.formBuilder.group({
        ngayCatCanh: '',
        ngayHaCanh:''
      });
    this.thongtinchuyenbayAPIService.findAll().then(
        res => {
            this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
           console.log(this.thongtinchuyenbays);
        },
        err => {
            console.log(err);
        }
       );

  }
  delete(maCb: string) {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.thongtinchuyenbayAPIService.delete(maCb).then(
                res => {
                    var result: any = res as any;
                    if (result.status) {
                        this.messageService.add({
                            severity: 'success',
                            detail: 'Done'
                        });
                        this.thongtinchuyenbayAPIService.findAll().then(
                            res => {
                                this.thongtinchuyenbays = res as ThongTinChuyenBay[];
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
