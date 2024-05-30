import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SignupService} from "../../services/signup.service";
import {DOCUMENT} from "@angular/common";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserControllerService} from "../../servs/services/user-controller.service";
import {UpdateUser$Params} from "../../servs/fn/user-controller/update-user";

@Component({
  selector: 'admin-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(/*@Inject(DOCUMENT) private document: _document,*/
              private route: ActivatedRoute,
              private router: Router,
              private signupService: SignupService,
              private fb: FormBuilder,
              private userService: UserControllerService
  ) {
  }

  changeadminInfo!: FormGroup;

  ngOnInit() {
    //console.log(this._document.body.querySelector('app-admin'));

    const userIdStr = localStorage.getItem('userId');
    if (userIdStr) {
      this.userId = parseInt(userIdStr, 10);
      console.log('Extracted userId:', this.userId);
    }
    this.getUserDetails()
    this.changeadminInfo = this.fb.group({
      userId: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      profileImage: '',
      role: '',
      isSubscribed: ''
    });
  }

  ngOnDestroy() {
    //this._document.body.querySelector('app-admin').classList.remove('profile-loaded');

  }

  userId!: number;
  adminInfo: any = {
    id: '',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed: ""
  }
  updateUser() {
    if (!this.userId){
      this.router.navigate(['/login']);
    }
    this.changeadminInfo.patchValue({
      userId: this.adminInfo.userId,
      profileImage: this.adminInfo.profileImage,
      role: this.adminInfo.role,
      isSubscribed: this.adminInfo.isSubscribed
    });
    if (this.changeadminInfo.value.firstName === '') {
      this.changeadminInfo.patchValue({firstName: this.adminInfo.firstName});
    }
    if (this.changeadminInfo.value.lastName === '') {
      this.changeadminInfo.patchValue({lastName: this.adminInfo.lastName});
    }
    if (this.changeadminInfo.value.email === '') {
      this.changeadminInfo.patchValue({email: this.adminInfo.email});
    }
    const params: UpdateUser$Params = {
      userId: this.userId,
      body: this.changeadminInfo.value
    }
    this.userService.updateUser(params).subscribe(
      (response: any) => {
        console.log('User updated:', response);
        this.router.navigate(['/admin/home']);
      },
      (error: any) => {
        console.error('Failed to update user:', error);
      }
    );
  }
  getUserDetails(): void {
    if (!this.userId) {
      this.router.navigate(['/login']);
      return;
    }
    // Fetch user details using the service
    this.signupService.getById(this.userId).subscribe(
      (res: any) => {

        console.log('Fetched user details:', res);
        this.adminInfo = res;
      },
      (error: any) => {
        console.error("Error fetching user by ID:", error);
      }
    );
  }
}
