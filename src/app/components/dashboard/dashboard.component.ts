import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormlienheAPI } from 'src/app/models/formlienhe.model';
import { HanhKhachAPI } from 'src/app/models/hanhkhach.model';
import { SanBay } from 'src/app/models/sanbay.model';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { VeAPI } from 'src/app/models/ve.model';
import { FormLienHeAPIService } from 'src/app/services/formlienheAPI.service';
import { HanhKhachAPIService } from 'src/app/services/hanhkhachAPI.service';
import { SanBayAPIService } from 'src/app/services/sanbayAPI.service';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';
import { VeAPIService } from 'src/app/services/ve.service';

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashBoardComponent implements OnInit {
  hanhkhachs:HanhKhachAPI[]
  sanbays:SanBay[]
  ves:VeAPI[]
  feedbacks:FormlienheAPI[]
  thongtinchuyenbays:ThongTinChuyenBay[]
  count1:number=0
  count2:number=0
  count3:number=0
  sum:number=0
  constructor(
    private thongtinchuyenbayAPIService:ThongTinChuyenBayAPIService,
    private hanhkhachAPIService:HanhKhachAPIService,
    private router: Router,
private messageService: MessageService,
private confirmationService: ConfirmationService,
private sanbayAPIService:SanBayAPIService,
private feedbackService:FormLienHeAPIService,
private veAPIService:VeAPIService,
){}
  ngOnInit() {
    this.feedbackService.findAll().then(
      res => {
          this.feedbacks = res as FormlienheAPI[]; 
         this.count1=this.feedbacks.length;
         console.log(this.feedbacks);
      },
      err => {
          console.log(err);
      }
     );
    this.hanhkhachAPIService.findAll().then(
      res => {
          this.hanhkhachs = res as HanhKhachAPI[]; 
          this.count2=this.hanhkhachs.length;
         console.log(this.hanhkhachs);
      },
      err => {
          console.log(err);
      }
     );
     this.sanbayAPIService.findAll().then(
      res => {
          this.sanbays = res as SanBay[]; 
    
         console.log(this.sanbays);
      },
      err => {
          console.log(err);
      }
     );
     this.thongtinchuyenbayAPIService.findAll().then(
      res => {
          this.thongtinchuyenbays = res as ThongTinChuyenBay[];
          this.count3=this.thongtinchuyenbays.length;
         console.log(this.thongtinchuyenbays);
      },
      err => {
          console.log(err);
      }
     );
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

