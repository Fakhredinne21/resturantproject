import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SignupService} from "../services/signup.service";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrl: './userhome.component.css'
})
export class UserhomeComponent implements OnInit {

  signInId!:number;

  signeIn: any = {
    userId:'',
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: "",
    role: "",
    isSubscribed:""
  }
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private notif: MatSnackBar,
              private signupService:SignupService) {
  }

  ngOnInit() {
    // Create the form using FormBuilder
    this.route.params.subscribe(params => {
      console.log('Route parameters:', params);
      this.signInId = +params['signInId'];
      console.log('Extracted userId:', this.signInId);
      this.getUserDetails()
    });

  }

  getUserDetails() {
    if (!this.signInId) {
      console.log('Invalid userId:', this.signInId);
      return;
    }
    // Fetch user details using the service
    this.signupService.getById(this.signInId).subscribe(
      (res: any) => {
        console.log('Fetched user details:', res);
        this.signeIn = res;
      },
      (error: any) => {
        console.error("Error fetching user by ID:", error);

      }
    );
  }
}
