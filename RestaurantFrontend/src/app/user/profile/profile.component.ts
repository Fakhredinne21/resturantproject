import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../../services/signup.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  signInId!: number;
  userinfo: any;
  changedUserInfo!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private signupService: SignupService
  ) {

    this.changedUserInfo = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      profileImage: [''],
      role: [''],
      isSubscribed: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
      this.signInId = +params['signInId'];
      console.log('Extracted userId:', this.signInId);
      this.getUserDetails();
    });
  }

  private getUserDetails() {
    if (!this.signInId) {
      console.log('Invalid userId:', this.signInId);
      return;
    }
    this.signupService.getById(this.signInId).subscribe(
      (response: any) => {
        console.log('User details:', response);
        this.userinfo = response;
        this.updateFormValues();
      },
      (error: any) => {
        console.error('Failed to fetch user details:', error);
        this.snackBar.open('Failed to fetch user details', 'Close');
      }
    );
  }

  private updateFormValues() {
    this.changedUserInfo.patchValue({
      firstName: this.userinfo.firstName,
      lastName: this.userinfo.lastName,
      email: this.userinfo.email,
      password: this.userinfo.password,
      profileImage: this.userinfo.profileImage,
      role: this.userinfo.role,
      isSubscribed: this.userinfo.isSubscribed
    });
  }

  updateUserDetails() {
    if (!this.signInId) {
      console.log('Invalid userId:', this.signInId);
      return;
    }
    this.signupService.updateUser(this.signInId, this.changedUserInfo.value).subscribe(
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
