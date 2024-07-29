import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { VeAPI } from 'src/app/models/ve.model';
import { VeAPIService } from 'src/app/services/ve.service';

@Component({
  templateUrl: './ve.component.html'
  
})
export class VeComponent implements OnInit {
    ves:VeAPI[];
    sum:number = 0;
    findByDates:FormGroup
    constructor(   
 private veAPIService:VeAPIService,
 private router: Router,
 private messageService: MessageService,
 private confirmationService: ConfirmationService,
 private formBuilder: FormBuilder,
 ){}
 delete(id: number) {
  this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.veAPIService.delete(id).then(
              res => {
                  var result: any = res as any;
                  if (result.status) {
                      this.messageService.add({
                          severity: 'success',
                          detail: 'Done'
                      });
                      this.veAPIService.findAll().then(
                          res => {
                              this.ves = res as VeAPI[];
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
search(){
    var thoiGianDat: string = this.findByDates.value.thoiGianDat;
    var thoiGianDi: string = this.findByDates.value.thoiGianDi;
    if(thoiGianDat != null && thoiGianDi != null){
        this.veAPIService.findByDates1(thoiGianDat,thoiGianDi).then(
            res => {
                this.ves = res as VeAPI[]; 
                for(var i=0;i<this.ves.length;i++){
                  console.log(this.ves[i].thoiGianDat)
                  console.log(this.ves[i].thoiGianDi)
                }  
            },
            err => {
                console.log(err);
            }
           );
    } if(thoiGianDat == '' && thoiGianDi !=null){
        this.veAPIService.findByDates(thoiGianDi).then(
            res => {
                this.ves = res as VeAPI[]; 
                for(var i=0;i<this.ves.length;i++){
                    console.log(this.ves[i].thoiGianDat)
                    console.log(this.ves[i].thoiGianDi)
                }    
            },
            err => {
                console.log(err);
            }
           );
    }
}
  ngOnInit() {
    this.findByDates = this.formBuilder.group({
        thoiGianDat: '',
        thoiGianDi: ''
      });
    this.veAPIService.findAll().then(
        res => {
            this.ves = res as VeAPI[]; 
            for(var i=0;i<this.ves.length;i++) {
              this.sum+=this.ves[i].giaGhe*this.ves[i].soLuong
              console.log(this.sum)
            }
           console.log(this.ves);
        },
        err => {
            console.log(err);
        }
       );
  }
}