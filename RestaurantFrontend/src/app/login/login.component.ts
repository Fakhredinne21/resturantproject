import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
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
