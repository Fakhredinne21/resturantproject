import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./admin/home/home.component";
import {ProfileComponent} from "./admin/profile/profile.component";
import {SubscriptionComponent} from "./admin/subscription/subscription.component";
import {MealComponent} from "./admin/meal/meal.component";
import {ActivateAccountComponent} from "./activate-account/activate-account.component";

const routes: Routes = [
  {path: '', redirectTo: "login", pathMatch: "full"},
  {path:'activate-account',component:ActivateAccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user/:userId', component: UserComponent},
  {path: 'admin', component: AdminComponent, children: [

      {path: '', redirectTo: "home", pathMatch: "full"},
      {path: 'home/:userId', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'subscriptions', component: SubscriptionComponent},
      {path:'meals',component:MealComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
