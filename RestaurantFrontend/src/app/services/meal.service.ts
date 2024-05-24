import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {


  private userUrl:String="http://localhost:8081/Meals";

  constructor(private http:HttpClient) { }

  createMeal(meal:any):Observable<any>{
    return this.http.post<any>(`${this.userUrl}`,meal)
  }
  getMealById(mealId:any):Observable<any>{
    return this.http.get<any>(`${this.userUrl}/${mealId}`);
  }

}
