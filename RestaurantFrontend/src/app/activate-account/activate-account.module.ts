import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivateAccountRoutingModule } from './activate-account-routing.module';
import { ActivateAccountComponent } from './activate-account.component';
import {CodeInputModule} from "angular-code-input";


@NgModule({
  declarations: [
    ActivateAccountComponent
  ],
  imports: [
    CommonModule,
    ActivateAccountRoutingModule,
    CodeInputModule
  ],
  exports: [
    ActivateAccountComponent
  ]
})
export class ActivateAccountModule { }
