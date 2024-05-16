import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {SubscriptionComponent} from "./subscription/subscription.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  /*{ path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'subscription', component: SubscriptionComponent },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
