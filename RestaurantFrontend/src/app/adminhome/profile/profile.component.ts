import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../../services/signup.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private notif: MatSnackBar,
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
  }
}
