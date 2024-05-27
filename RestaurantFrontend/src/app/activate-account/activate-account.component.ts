import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../servs/services/authentication.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.css'
})
export class ActivateAccountComponent {


  message = '';
  isOkay = true;
  submitted = false;

  constructor(
    private route:Router,
    private authService:AuthenticationService

  ) {}

  redirectToLogin() {
    this.route.navigate(['login']);
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }

  private confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next:()=>{
        this.message='your account has been successfully activated.\n';
        this.submitted = true;
        this.isOkay=true;
      },
      error:()=>{
        this.message='token has been expired';
        this.submitted = true;
        this.isOkay=false;
      }
    })
  }

}
