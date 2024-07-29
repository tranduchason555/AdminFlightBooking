import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SanBay } from 'src/app/models/sanbay.model';
import { SanBayAPIService } from 'src/app/services/sanbayAPI.service';

@Component({
  templateUrl: './addsanbay.component.html'

})
export class AddSanBayComponent implements OnInit {
  SanBayForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sanbayService: SanBayAPIService,
    private messageService: MessageService
  ) { }
  ngOnInit() {
    this.SanBayForm = this.formBuilder.group({
      maSbay: '',
      tenSbay: '',
      tenTinhThanh: '',
    });

  }
  save(){
    var sanbay: SanBay = this.SanBayForm.value as SanBay;
    this.sanbayService.create(sanbay).then(
      res => {
        var result: any = res as any;
        if (result.status) {
          this.router.navigate(['/sanbay'])
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