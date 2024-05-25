import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {MealComponent} from './meal/meal.component';
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./admin/home/home.component";
import {ProfileComponent} from "./admin/profile/profile.component";
import {SubscriptionComponent} from "./admin/subscription/subscription.component";

const routes: Routes = [
  {path: '', redirectTo: "login", pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'meal', component: MealComponent},
  {path: 'home/:signInId', component: UserComponent},
  {path: 'admin', component: AdminComponent, children: [
      {path: '', redirectTo: "home", pathMatch: "full"},
      {path: 'home', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'subscriptions', component: SubscriptionComponent},
      {path: 'meal', component: MealComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
