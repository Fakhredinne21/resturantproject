import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupService } from '../services/signup.service';
import {AdminIdetifierService} from "../services/admin-idetifier.service";
import {AuthenticationService} from "../servs/services/authentication.service";
import {AuthenticationRequest} from "../servs/models/authentication-request";
import {TokenService} from "../servs/token/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  signInId!:number;
  authRequest:AuthenticationRequest={
    email:'',
    password:''
  }
  constructor(
    private router: Router,
    private authService:AuthenticationService,
    private tokenService:TokenService
  ) {}

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['signup'])
  }
  login(){
    this.authService.authenticate({
      body:this.authRequest
    }).subscribe({
      next:(res)=>{
        this.tokenService.token = res.token as string;
        this.router.navigate(['home',this.signInId]);
      }
    })
  }
  protected readonly requestAnimationFrame = requestAnimationFrame;
}
