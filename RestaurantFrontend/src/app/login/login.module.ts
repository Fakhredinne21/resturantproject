import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RightsideComponent } from './rightside/rightside.component';


@NgModule({
  declarations: [
    LoginComponent,
    RightsideComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    LoginComponent,
    RightsideComponent
  ]
})
export class LoginModule { }
