import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signeupService: SignupService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.snackBar.open('Please fill out all fields correctly.', 'Close', {
        duration: 4000,
        verticalPosition: 'top',
      });
      return;
    }

    const { email, password } = this.loginForm.value;

    this.signeupService.getAllUsers().subscribe({
      next: (users: any[]) => {
        const user = users.find((u) => u.email === email);

        if (user) {
          if (user.password === password) {
            this.snackBar.open('Login Successful!', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
            });

            // Store user data (e.g., in local storage) if needed

            if (user.role === 'Admin') {
              //this.router.navigate(['/admin/home', user.id]);
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/home', user.id]);
            }
          } else {
            this.snackBar.open('Incorrect password.', 'Close', {
              duration: 4000,
              verticalPosition: 'top',
            });
          }
        } else {
          this.snackBar.open('User not found.', 'Close', {
            duration: 4000,
            verticalPosition: 'top',
          });
        }
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.snackBar.open('An error occurred. Please try again later.', 'Close', {
          duration: 4000,
          verticalPosition: 'top',
        });
      },
    });
  }
}
