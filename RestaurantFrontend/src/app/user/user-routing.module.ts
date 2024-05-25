import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicketComponent} from "./ticket/ticket.component";
import {useAnimation} from "@angular/animations";
import {UserComponent} from "./user.component";
import {ProfileComponent} from "./profile/profile.component";
import {NotificationComponent} from "./notification/notification.component";

const routes: Routes = [
  {path:'home/:signInId',component:UserComponent},
  { path:'ticket/:signInId', component: TicketComponent },
  {path:'profile/:signInId',component:ProfileComponent},
  {path:'notification/:signInId',component:NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
