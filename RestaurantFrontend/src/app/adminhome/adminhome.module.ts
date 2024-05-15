import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeRoutingModule } from './adminhome-routing.module';
import { AdminhomeComponent } from './adminhome.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ProfileComponent } from './profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminhomeComponent,
    SubscriptionComponent,
    ProfileComponent,

  ],
    imports: [
        CommonModule,
        AdminhomeRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    AdminhomeComponent,
    SubscriptionComponent,
    ProfileComponent,

  ]
})
export class AdminhomeModule { }
