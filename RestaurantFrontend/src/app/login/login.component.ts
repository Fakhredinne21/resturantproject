import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FormsModule


  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  formBuilder = new FormBuilder();
  loginform: FormGroup=this.formBuilder.group({
    email: this.emailControl,
    password: this.passwordControl
  })
  login:any={
    email:'',
  password:''};
  onSubmit(){
    alert(this.loginform.controls['email'].value+"   "+this.loginform.controls['password'].value);

  }

}
