import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdminIdentifierService} from "../../services/adminIdentifier.service";
import {MealService} from "../../services/meal.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})
export class MealComponent implements OnInit {
  userId!: number;
  mealForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private mealService: MealService,
    private adminService: AdminIdentifierService,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit() {
    const today = this.datePipe.transform(new Date(), 'yyyy-MM-dd-HH:mm:ss');
    this.userId = parseInt(this.adminService.getAdminId());
    this.mealForm = this.fb.group({
      meal_id: "",
      description: "",
      price: "",
      created_date: today,
    });
  }

  createMeal() {
    if (this.mealForm.valid) {
      const meal = this.mealForm.value;
      this.mealService.createMeal(meal)
        .subscribe(response => {
            this.snackBar.open('Meal Created Successfully!', 'close', {
              duration: 10000,
              verticalPosition: 'top'
            });
            this.mealForm.reset();
            this.router.navigate(['admin/home']);
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

