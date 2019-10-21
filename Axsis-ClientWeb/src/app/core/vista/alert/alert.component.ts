import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  private subscription:Subscription;
  message:any;
  constructor(private alertService:AlertService) { }

  ngOnInit() {
    this.subscription=this.alertService.getAlert()
            .subscribe(message =>{
                switch(message && message.type)
                {
                  case 'success':
                    message.icon = 'fas fa-check';
                    message.cssClass ='alert alert-sm alert-success';
                    break;
                  case 'error':
                    message.icon = 'fas fa-times-circle';
                    message.cssClass ='alert  alert-sm alert-danger';
                    break;
                  case 'warning':
                    message.icon = 'fas fa-exclamation-circle';
                    message.cssClass = 'alert  alert-sm alert-warning';
                    break;
                  case 'info':
                    message.icon = 'fas fa-info-circle';
                    message.cssClass = 'alert  alert-sm alert-info';
                    break;
                }
                this.message=message;
            });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
}
}
