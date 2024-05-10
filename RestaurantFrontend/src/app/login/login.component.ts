import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule


  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  formBuilder = new FormBuilder();
  loginform: FormGroup = this.formBuilder.group({
    email: this.emailControl,
    password: this.passwordControl
  });
  onSubmit(){
    //implement service
  }

}
