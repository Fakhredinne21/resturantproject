import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TicketComponent } from './ticket/ticket.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbar} from "@angular/material/toolbar";
import {UserHomeComponent} from "./home/home.component";
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";
import {UserProfileComponent} from "./profile/profile.component";


@NgModule({
  declarations: [
    UserComponent,
    TicketComponent,
    UserProfileComponent,
    UserHomeComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatToolbar,
    NavBarComponent
  ]
})
export class UserModule { }
