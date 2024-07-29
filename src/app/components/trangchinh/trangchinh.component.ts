import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ThongTinChuyenBay } from 'src/app/models/thongtinchuyenbay.model';
import { ThongTinChuyenBayAPIService } from 'src/app/services/thongtinchuyenbayAPI.service';

@Component({
    selector: 'app-root',
  templateUrl: './trangchinh.component.html'
})
export class TrangChinhComponent implements OnInit {
    ngOnInit(){
        
    }
}