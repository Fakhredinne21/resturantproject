import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";
import {MealComponent} from './meal/meal.component';

@NgModule({
  providers: [DatePipe],
  declarations: [
    AdminComponent,
    ProfileComponent,
    HomeComponent,
    MealComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NavBarComponent
  ],
})
export class AdminModule {
}
