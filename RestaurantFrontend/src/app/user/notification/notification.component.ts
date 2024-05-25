import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NoticationserviceService} from "../../services/noticationservice.service";
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit{
  signInId!: number;
  notifs:any=[];
  notif!:FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private notificationService:NoticationserviceService
  ) {
  }

  ngOnInit() {
    this.notif = this.fb.group({
      notif_id:"",
      text:"",
      title:"",
    });
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
      this.signInId = +params['signInId'];
      console.log('Extracted userId:', this.signInId);
      this.getNotification();
    });

  }

  getNotification() {
    if (!this.signInId) {
      console.log('Invalid userId:', this.signInId);
      return;
    }
    this.notificationService.getNotificationByUser(this.signInId).subscribe((res:any)=>{
      console.log('Notification:', res);
      this.notifs=res;
      console.log('Notification:', this.notifs);
    },
      (error:any)=>{
      console.error('Failed to fetch notification:', error);
      }
      );
  }
}
