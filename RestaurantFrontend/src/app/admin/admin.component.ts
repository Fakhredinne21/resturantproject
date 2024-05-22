import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router,RouterLink} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../services/signup.service";
import {ProfileComponent} from "./profile/profile.component";
import {SubscriptionComponent} from "./subscription/subscription.component";
import {AdminModule} from "./admin.module";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit, OnDestroy {

  /*adminId!: number;
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

  constructor(
    private route: ActivatedRoute,
    private signupService: SignupService
  ) {}

  ngOnInit(): void {
    // Create the form using FormBuilder
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
      this.adminId = +params['adminId'];
      console.log('Extracted userId:', this.adminId);
      this.getUserDetails()
    });
  };
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
  }*/

  // @ts-ignore
  constructor( @Inject(DOCUMENT) private _document ) {}

  ngOnInit() {
    this._document.body.classList.add('main-body');
  }

  ngOnDestroy() {
    // remove the class form body tag
    this._document.body.classList.remove('main-body');
  }

}
