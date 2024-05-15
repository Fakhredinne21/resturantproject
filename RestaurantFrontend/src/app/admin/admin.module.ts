import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ProfileComponent } from './profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminComponent,
    SubscriptionComponent,
    ProfileComponent,

  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    AdminComponent,
    SubscriptionComponent,
    ProfileComponent,

  ]
})
export class AdminModule { }
