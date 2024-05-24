import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import { MealComponent } from './meal/meal.component';
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'meal',component:MealComponent},
  {path:'home/:signInId',component:UserComponent},
  {path:'admin/:adminId',component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
