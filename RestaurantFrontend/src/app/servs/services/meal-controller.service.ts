/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteMeal } from '../fn/meal-controller/delete-meal';
import { DeleteMeal$Params } from '../fn/meal-controller/delete-meal';
import { getAllMeals } from '../fn/meal-controller/get-all-meals';
import { GetAllMeals$Params } from '../fn/meal-controller/get-all-meals';
import { getMealById } from '../fn/meal-controller/get-meal-by-id';
import { GetMealById$Params } from '../fn/meal-controller/get-meal-by-id';
import { Meal } from '../models/meal';
import { mealCreation } from '../fn/meal-controller/meal-creation';
import { MealCreation$Params } from '../fn/meal-controller/meal-creation';

@Injectable({ providedIn: 'root' })
export class MealControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllMeals()` */
  static readonly GetAllMealsPath = '/Meals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMeals()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMeals$Response(params?: GetAllMeals$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Meal>>> {
    return getAllMeals(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMeals$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMeals(params?: GetAllMeals$Params, context?: HttpContext): Observable<Array<Meal>> {
    return this.getAllMeals$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Meal>>): Array<Meal> => r.body)
    );
  }

  /** Path part for operation `mealCreation()` */
  static readonly MealCreationPath = '/Meals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mealCreation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mealCreation$Response(params: MealCreation$Params, context?: HttpContext): Observable<StrictHttpResponse<Meal>> {
    return mealCreation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mealCreation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  mealCreation(params: MealCreation$Params, context?: HttpContext): Observable<Meal> {
    return this.mealCreation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Meal>): Meal => r.body)
    );
  }

  /** Path part for operation `getMealById()` */
  static readonly GetMealByIdPath = '/Meals/{mealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMealById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMealById$Response(params: GetMealById$Params, context?: HttpContext): Observable<StrictHttpResponse<Meal>> {
    return getMealById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMealById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMealById(params: GetMealById$Params, context?: HttpContext): Observable<Meal> {
    return this.getMealById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Meal>): Meal => r.body)
    );
  }

  /** Path part for operation `deleteMeal()` */
  static readonly DeleteMealPath = '/Meals/{mealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMeal()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMeal$Response(params: DeleteMeal$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteMeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteMeal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMeal(params: DeleteMeal$Params, context?: HttpContext): Observable<void> {
    return this.deleteMeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
