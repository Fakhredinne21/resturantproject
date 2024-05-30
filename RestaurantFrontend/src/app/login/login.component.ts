import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SignupService} from '../services/signup.service';
import {AdminIdentifierService} from "../services/adminIdentifier.service";
import {AuthenticationService} from "../servs/services/authentication.service";
import {AuthenticationRequest} from "../servs/models/authentication-request";
import {TokenService} from "../servs/token/token.service";
import {UserIdentifierService} from "../services/userIdentifier.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  signInId!: number;
  authRequest: AuthenticationRequest = {
    email: '',
    password: '',
  }

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private userService: UserIdentifierService,
    private adminService: AdminIdentifierService
  ) {
  }

  ngOnInit(): void {
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.signInId = parseInt(userIdStr, 10);
    }
  }

  register() {
    this.router.navigate(['signup'])
  }

  login() {
    /*console.log(this.authRequest); // Log the request payload
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        localStorage.setItem('userId', res.userId.toString());

        if(res.roles.includes("ADMIN")){
          this.router.navigate([`admin/home`]);
        }else if(res.roles.includes("USER")){
          this.router.navigate([`home/:userId`], { queryParams: { userId: res.userId } });
        }else{
          console.error('unknow role');
        }
      },
      error: (err) => {
        console.error('Authentication error:', err);
      }
    });*/

    /*this.userService.setUserId(1);
    this.router.navigate(['user']);*/

    this.adminService.setAdminId(1);
    this.router.navigate(['admin']);
  }

  protected readonly requestAnimationFrame = requestAnimationFrame;
}
