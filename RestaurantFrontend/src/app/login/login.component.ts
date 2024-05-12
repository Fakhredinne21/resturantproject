import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {SignupService} from "../services/signup.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formBuilder = new FormBuilder();
  loginform !: FormGroup;
  login: any = {
    id:'',
    email: '',
    password: ''
  };
  Users: any[] = [];
  getAllUsers() {
    this.signeupService.getAllUsers().subscribe((res: any[]) => {
      return this.Users = res;
    });
  }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.getAllUsers();
  }
  constructor(private signeupService: SignupService,
              private route: ActivatedRoute,
              private router: Router,
              private notif: MatSnackBar,) {
  }



  correct() {
    if (this.loginform.valid) {
      const email = this.loginform.value.email;
      const password = this.loginform.value.password;

      // Find user by email
      const user = this.Users.find(user => user.email === email);

      if (user) {
        // User found, check password
        if (user.password === password) {
          // Password matches, user is authenticated
          this.notif.open('Login Seccsesful!', 'close', {
            duration: 10000,
            verticalPosition: 'top',
          });
          if(user.role==="Admin"){
            console.log("admin");
            this.loginform.reset();
            this.router.navigate(['/admin',user.id]);
          }
          else{
            console.log("non admin");
            this.loginform.reset();
            this.router.navigate(['/home',user.id]);
          }
          // Proceed with login logic (e.g., navigate to home page)
        } else {
          // Password does not match
          this.notif.open('Login info Error!', 'close', {
            duration: 10000,
            verticalPosition: 'top',
          });
          this.loginform.reset();
          // Handle incorrect password (e.g., show error message)
        }
      } else {
        // User not found
        this.notif.open('User not found!', 'close', {
          duration: 10000,
          verticalPosition: 'top',
        });
        this.loginform.reset();
        // Handle user not found (e.g., show error message)
      }
    } else {
      this.notif.open('fill out all the form please,', 'close', {
        duration: 4000,
        verticalPosition: 'top',
      });
      this.loginform.reset();
    }
  }
}
