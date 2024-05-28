import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RegistrationRequest} from "../servs/models/registration-request";
import {AuthenticationService} from "../servs/services/authentication.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {


  constructor(
              private route: Router,
              private auth : AuthenticationService
              ) { }

  registerRequest:RegistrationRequest={
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    role:""
  }
  errorMsg: Array<String> = [];

login(){
    this.route.navigate(['login']);
}
register(){
    this.auth.register({
      body:this.registerRequest
  }).subscribe({
    next:()=>{
    this.route.navigate(['activate-account'])
    },
      error:(err)=>{
          this.errorMsg = err.error.validationErrors;
      }
    })
}

  ngOnInit(): void {
  }




}
