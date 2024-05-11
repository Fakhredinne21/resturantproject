import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealRoutingModule } from './meal-routing.module';
import { MealComponent } from './meal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MealComponent
  ],
  imports: [
    CommonModule,
    MealRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    MealComponent
  ]
})
export class MealModule { }
