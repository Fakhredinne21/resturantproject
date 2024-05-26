import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RightsideComponent } from './rightside/rightside.component';


@NgModule({
  declarations: [
    SignupComponent,
    RightsideComponent
  ],
    imports: [
        CommonModule,
        SignupRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
