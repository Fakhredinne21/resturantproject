import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicketComponent} from "./ticket/ticket.component";
import {useAnimation} from "@angular/animations";
import {UserComponent} from "./user.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path:'home/:userId',component:UserComponent},
  { path:'ticket/:userId', component: TicketComponent },
  {path:'profile/:userId',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
