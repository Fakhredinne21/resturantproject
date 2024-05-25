import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AdminIdetifierService} from "../../services/admin-idetifier.service";
import {MealService} from "../../services/meal.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})
export class MealComponent implements OnInit{
 adminId!: string;
 createMealForm!: FormGroup;
 constructor(
   private fb: FormBuilder,
   private route: ActivatedRoute,
   private router: Router,
   private snackBar: MatSnackBar,
   private mealService:MealService,
   private adminService:AdminIdetifierService,
 ) {}
  ngOnInit() {
    this.adminId= this.adminService.getadminId();
    this.createMealForm= this.fb.group({
      meal_id:"",
      description:"",
      price:"",
      created_date:"",
    });
 }
  createMeal() {
    if (this.createMealForm.valid) {
      const meal = this.createMealForm.value;
      this.mealService.createMeal(meal)
        .subscribe(response => {
            this.snackBar.open('Meal Created Successfully!', 'close', {
              duration: 10000,
              verticalPosition: 'top'
            });
            this.createMealForm.reset();
            this.router.navigate(['/admin/home', response.id]);
          },
          error => {
            console.error("Error adding meal:", error);
            this.snackBar.open('An error occurred. Please try again.', 'close', {
              duration: 4000,
              verticalPosition: 'top'
            });
          });
    } else {
      this.snackBar.open('Please fill out all required fields.', 'close', {
        duration: 4000,
        verticalPosition: 'top'
      });
    }
  }
}

