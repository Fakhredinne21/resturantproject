import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TicketComponent} from "./ticket/ticket.component";
import {useAnimation} from "@angular/animations";
import {UserComponent} from "./user.component";

const routes: Routes = [
  {path:'home/:signInId',component:UserComponent},
  { path: 'ticket/:signInId', component: TicketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
