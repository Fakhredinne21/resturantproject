import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {SignupService} from "../services/signup.service";
import {RegistrationRequest} from "../servs/models/registration-request";
import {AuthenticationService} from "../servs/services/authentication.service";
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  errorMsg:Array<String>=[];

  constructor(private fb: FormBuilder,
              private route: Router,
              private snackBar: MatSnackBar,
              private auth : AuthenticationService
              ) { }

  registerRequest:RegistrationRequest={
    firstName:"",
    lastName:"",
    email:"",
    password:""
  }

login(){
    this.route.navigate(['login']);
}
registre(){
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
