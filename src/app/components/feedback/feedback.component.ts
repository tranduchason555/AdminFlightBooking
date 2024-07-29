import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormlienheAPI } from 'src/app/models/formlienhe.model';
import { FormLienHeAPIService } from 'src/app/services/formlienheAPI.service';

@Component({
  templateUrl: './feedback.component.html'
})
export class FeedBackComponent implements OnInit {
    feedbacks:FormlienheAPI[]
    constructor(
        private feedbackService:FormLienHeAPIService,
       
 private router: Router,
 private messageService: MessageService,
 private confirmationService: ConfirmationService,
    ){}
  ngOnInit() {
    this.feedbackService.findAll().then(
        res => {
            this.feedbacks = res as FormlienheAPI[]; 
           console.log(this.feedbacks);
        },
        err => {
            console.log(err);
        }
       );

  }
  delete(maForm: number) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            this.feedbackService.delete(maForm).then(
                res => {
                    var result: any = res as any;
                    if (result.status) {
                       
                        this.feedbackService.findAll().then(
                            res => {
                                this.feedbacks = res as FormlienheAPI[];
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
