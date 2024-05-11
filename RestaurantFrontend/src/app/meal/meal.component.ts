import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from '../services/meal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})
export class MealComponent {
  formBuilder = new FormBuilder();
  mealForm!: FormGroup;

  meal: any = {
    description: "",
    price: ""
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private notif: MatSnackBar, private mealService:MealService) {
  }
  affichage!: Observable<any>;

  ngOnInit() {
    this.mealForm= this.fb.group({
      description: ['' , Validators.required],
      price: [0, Validators.required]
    });
  }
  createMeal() {
    if (this.mealForm.valid) {
      this.meal = this.mealForm.value;
      this.mealService.createMeal(this.meal).subscribe(
        response => {
          this.notif.open('Form Submitted Successfully ..!', 'close', {
            duration: 10000,
            verticalPosition: 'top',
          });
          this.mealForm.reset();
          this.router.navigate(['/']);
        },
        error => {
          this.notif.open('Error ..!', 'close', {
            duration: 10000,
            verticalPosition: 'top',
          });
        }
      );
    }
  }
}
