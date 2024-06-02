import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicketComponent} from "./ticket/ticket.component";
import {useAnimation} from "@angular/animations";
import {UserComponent} from "./user.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path:'home',component:UserComponent},
  {path:'ticket', component: TicketComponent },
  {path:'profile',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
