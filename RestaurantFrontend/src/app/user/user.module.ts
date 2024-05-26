import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TicketComponent } from './ticket/ticket.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import {MatToolbar} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    UserComponent,
    TicketComponent,
    ProfileComponent,


  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatToolbar
  ],
  exports: [
    UserComponent,
    TicketComponent,
    ProfileComponent,

  ]
})
export class UserModule { }
