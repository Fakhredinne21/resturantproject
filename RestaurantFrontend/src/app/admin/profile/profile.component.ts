import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SignupService} from "../../services/signup.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'admin-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {

  // @ts-ignore
  constructor(@Inject(DOCUMENT) private document: _document,
              private route: ActivatedRoute,
              private signupService: SignupService) {
  }

  ngOnInit() {
    console.log(this._document.body.querySelector('app-admin'));

    this.route.params.subscribe(params => {
      this.adminId = +params['adminId'];
      this.getUserDetails()
    });
  }

  ngOnDestroy() {
    this._document.body.querySelector('app-admin').classList.remove('profile-loaded');
  }

  adminId!: number;
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

  getUserDetails(): void {
    if (!this.adminId) {
      console.log('Invalid userId:', this.adminId);
      return;
    }
    // Fetch user details using the service
    this.signupService.getById(this.adminId).subscribe(
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
