import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./admin/home/home.component";
import {ProfileComponent} from "./admin/profile/profile.component";
import {MealComponent} from "./admin/meal/meal.component";
import {ActivateAccountComponent} from "./activate-account/activate-account.component";
import {TicketComponent} from "./user/ticket/ticket.component";
import {UserHomeComponent} from "./user/home/home.component";
import {UserProfileComponent} from "./user/profile/profile.component";

const routes: Routes = [
  {path: '', redirectTo: "login", pathMatch: "full"},
  {path: 'activate-account', component: ActivateAccountComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'user', component: UserComponent, children: [
      {path: '', redirectTo: "home", pathMatch: "full"},
      {path: 'home', component: UserHomeComponent},
      {path: 'ticket', component: TicketComponent},
      {path: 'profile', component: UserProfileComponent}
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', redirectTo: "home", pathMatch: "full"},
      {path: 'home', component: HomeComponent},
      {path: 'meals', component: MealComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
