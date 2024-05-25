import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TicketComponent } from './ticket/ticket.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    UserComponent,
    TicketComponent,
    ProfileComponent,
    NotificationComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    UserComponent,
    TicketComponent,
    ProfileComponent,
    NotificationComponent,

  ]
})
export class UserModule { }
