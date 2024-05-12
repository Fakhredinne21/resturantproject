import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import { MealComponent } from './meal/meal.component';
import {UserhomeComponent} from "./userhome/userhome.component";
import {AdminhomeComponent} from "./adminhome/adminhome.component";

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'meal',component:MealComponent},
  {path:'home/:signInId',component:UserhomeComponent},
  {path:'admin/:loginId',component:AdminhomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
