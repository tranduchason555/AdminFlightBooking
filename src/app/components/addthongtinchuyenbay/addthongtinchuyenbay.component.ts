import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';

@Component({
  templateUrl: './addthongtinchuyenbay.component.html'

})
export class AddThongTinChuyenBayComponent implements OnInit {
    ThongTinChuyenBayForm:FormGroup;
    thongtinchuyenbays:ThongTinChuyenBay[]
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private thongtinchuyenbayAPIService: ThongTinChuyenBayAPIService,
        private messageService: MessageService
      ) { }
  ngOnInit() {
    this.thongtinchuyenbayAPIService.findAll().then(
      res => {
          this.thongtinchuyenbays = res as ThongTinChuyenBay[]; 
         console.log(this.thongtinchuyenbays);
      },
      err => {
          console.log(err);
      }
     );
    this.ThongTinChuyenBayForm = this.formBuilder.group({
        maCb:'',
        tenCb:'',
        ngayCatCanh:'',
        gioCatCanh:'',
        ngayHaCanh:'',
        gioHaCanh:'',
        maSbayDi:'',
        maSbayDen:'',
        tenTinhThanhSanBayDi:'',
        tenTinhThanhSanBayDen:'',
        gheLoai1:'',
        gheLoai2:'',
        soLuongVe:'',
        giaGheLoai1:'',
        giaGheLoai2:'',
      });
  }
  save(){
    var chuyenbay: ThongTinChuyenBay = this.ThongTinChuyenBayForm.value as ThongTinChuyenBay;
    this.thongtinchuyenbayAPIService.create(chuyenbay).then(
      res => {
        var result: any = res as any;
        if (result.status) {
          this.router.navigate(['/thongtinchuyenbay'])
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
