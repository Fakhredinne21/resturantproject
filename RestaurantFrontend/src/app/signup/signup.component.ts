import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {SignupService} from "../services/signup.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar,
              private signupService: SignupService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      profileImage: [''],
      role: ['', Validators.required],
      isSubscribed: [false]
    });
  }

  createUser() {
    if (this.signupForm.valid) {
      const user = this.signupForm.value;

      this.signupService.createUser(user)
        .subscribe(response => {
            this.snackBar.open('Form Submitted Successfully!', 'close', {
              duration: 10000,
              verticalPosition: 'top'
            });
            this.signupForm.reset();
            this.router.navigate(['/home', response.id]);
          },
          error => {
            console.error("Error adding user:", error);
            this.snackBar.open('An error occurred. Please try again.', 'close', {
              duration: 4000,
              verticalPosition: 'top'
            });
          });
    } else {
      this.snackBar.open('Please fill out all required fields.', 'close', {
        duration: 4000,
        verticalPosition: 'top'
      });
    }
  }
}
