import { Routes } from '@angular/router';
import {SubscriptionComponent} from "./subscription/subscription.component";

export const routes: Routes = [
  {path:'',redirectTo:'subs',pathMatch:'full'},
  {path:'subs',component:SubscriptionComponent}
];
