import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {SignupService} from "../services/signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  formBuilder = new FormBuilder();
  signeInForm!: FormGroup ;

  signeIn: any = {
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
    this.signeInForm= this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profileImage: ['', Validators.required],
      role: ['', Validators.required],
      isSubscribed: ['', Validators.required]
    });
  }

  /*createUser() {

    if (this.signeInForm.valid) {
      this.signupService.createUser(this.signeIn).subscribe(
        response => {
          this.notif.open('Form Submitted Successfully ..!', 'close', {
            duration: 10000,
            verticalPosition: 'top',
          });
          this.signeInForm.reset();
          this.router.navigate(['/']);
        },
        error => {
          console.error("Error adding ", error);
        }
      );
    } else {
      this.notif.open('fill out all the form please,', 'close', {
        duration: 4000,
        verticalPosition: 'top',
      });
      console.log(this.signeInForm.value);
      console.log(this.signeInForm.valid)
    }
  }
  get(id:Number){
    return this.signupService.get(id);
  }*/
  onSubmit(){
    alert(this.signeInForm.controls['email'].value+" "+this.signeInForm.controls['password'].value+" "+this.signeInForm.controls['lastname']+""+this.signeInForm.controls['firstname'].value);
  }
}
