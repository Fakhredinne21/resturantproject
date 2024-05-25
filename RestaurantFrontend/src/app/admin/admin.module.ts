import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {SubscriptionComponent} from './subscription/subscription.component';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";
import { MealComponent } from './meal/meal.component';

@NgModule({
  declarations: [
    AdminComponent,
    SubscriptionComponent,
    ProfileComponent,
    HomeComponent,
    NavBarComponent,
    MealComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
  
    MealComponent
  ]
})
export class AdminModule {
}
