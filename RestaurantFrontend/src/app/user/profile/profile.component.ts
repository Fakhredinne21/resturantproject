import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../../services/signup.service";
import {UserControllerService} from "../../servs/services/user-controller.service";
import {UpdateUser$Params} from "../../servs/fn/user-controller/update-user";
import {TokenService} from "../../servs/token/token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId!: number;
  userinfo: any = {
    userId:'',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed:""
  }
  changedUserInfo!:FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private signupService: SignupService,
    private userService: UserControllerService,
    private tokenService :TokenService,

  ) {}
  logout(){
    localStorage.removeItem('userId');
    this.tokenService.token == null ;
    this.router.navigate(['login']);
  }
  ngOnInit() {
    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = parseInt(userIdStr, 10);
      console.log('Extracted userId:', this.userId);
    }

    this.getUserDetails();

    this.changedUserInfo = this.fb.group({
      userId:'',
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      profileImage:'',
      role:'',
      isSubscribed:''
    });
  }

  private getUserDetails() {
    if (!this.userId) {
      this.router.navigate(['login']);
    }
    this.signupService.getById(this.userId).subscribe(
      (response: any) => {
        console.log('User details:', response);
        this.userinfo = response;
      },
      (error: any) => {
        console.error('Failed to fetch user details:', error);
        this.snackBar.open('Failed to fetch user details', 'Close');
      }
    );
  }
  updateUserDetails() {
    if (!this.userId) {
      console.log('Invalid userId:', this.userId);
      return;
    }
    this.changedUserInfo.patchValue({
      userId: this.userinfo.userId,
      profileImage: this.userinfo.profileImage,
      role: this.userinfo.role,
      isSubscribed: this.userinfo.isSubscribed
    });
    if (this.changedUserInfo.value.firstName === '') {
      this.changedUserInfo.patchValue({firstName: this.userinfo.firstName});
    }
    if (this.changedUserInfo.value.lastName === '') {
      this.changedUserInfo.patchValue({lastName: this.userinfo.lastName});
    }
    if (this.changedUserInfo.value.email === '') {
      this.changedUserInfo.patchValue({email: this.userinfo.email});
    }
    const params:UpdateUser$Params = {
      userId: this.userId,
      body: this.changedUserInfo.value
    }
      this.userService.updateUser(params).subscribe(
        (response: any) => {
          console.log('User details updated:', response);
          this.snackBar.open('User details updated', 'Close');
        },
        (error: any) => {
          console.error('Failed to update user details:', error);
          this.snackBar.open('Failed to update user details', 'Close');
        }
      );
    }
  }
