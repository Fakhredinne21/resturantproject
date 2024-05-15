import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TicketComponent } from './ticket/ticket.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserComponent,
    TicketComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    UserComponent,
    TicketComponent,

  ]
})
export class UserModule { }
