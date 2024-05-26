/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createReview } from '../fn/review-controller/create-review';
import { CreateReview$Params } from '../fn/review-controller/create-review';
import { deleteReview } from '../fn/review-controller/delete-review';
import { DeleteReview$Params } from '../fn/review-controller/delete-review';
import { getAllReviews } from '../fn/review-controller/get-all-reviews';
import { GetAllReviews$Params } from '../fn/review-controller/get-all-reviews';
import { getReviewsByUser } from '../fn/review-controller/get-reviews-by-user';
import { GetReviewsByUser$Params } from '../fn/review-controller/get-reviews-by-user';
import { getReviewsForMeal } from '../fn/review-controller/get-reviews-for-meal';
import { GetReviewsForMeal$Params } from '../fn/review-controller/get-reviews-for-meal';
import { Review } from '../models/review';
import { updateReview } from '../fn/review-controller/update-review';
import { UpdateReview$Params } from '../fn/review-controller/update-review';

@Injectable({ providedIn: 'root' })
export class ReviewControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateReview()` */
  static readonly UpdateReviewPath = '/reviews/{userId}/{mealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateReview()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReview$Response(params: UpdateReview$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
    return updateReview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateReview$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateReview(params: UpdateReview$Params, context?: HttpContext): Observable<Review> {
    return this.updateReview$Response(params, context).pipe(
      map((r: StrictHttpResponse<Review>): Review => r.body)
    );
  }

  /** Path part for operation `createReview()` */
  static readonly CreateReviewPath = '/reviews/{userId}/{mealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createReview()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReview$Response(params: CreateReview$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
    return createReview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createReview$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createReview(params: CreateReview$Params, context?: HttpContext): Observable<Review> {
    return this.createReview$Response(params, context).pipe(
      map((r: StrictHttpResponse<Review>): Review => r.body)
    );
  }

  /** Path part for operation `getAllReviews()` */
  static readonly GetAllReviewsPath = '/reviews';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllReviews()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllReviews$Response(params?: GetAllReviews$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Review>>> {
    return getAllReviews(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllReviews$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllReviews(params?: GetAllReviews$Params, context?: HttpContext): Observable<Array<Review>> {
    return this.getAllReviews$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Review>>): Array<Review> => r.body)
    );
  }

  /** Path part for operation `getReviewsByUser()` */
  static readonly GetReviewsByUserPath = '/reviews/user/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReviewsByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReviewsByUser$Response(params: GetReviewsByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Review>>> {
    return getReviewsByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReviewsByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReviewsByUser(params: GetReviewsByUser$Params, context?: HttpContext): Observable<Array<Review>> {
    return this.getReviewsByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Review>>): Array<Review> => r.body)
    );
  }

  /** Path part for operation `getReviewsForMeal()` */
  static readonly GetReviewsForMealPath = '/reviews/meal/{mealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReviewsForMeal()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReviewsForMeal$Response(params: GetReviewsForMeal$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Review>>> {
    return getReviewsForMeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReviewsForMeal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReviewsForMeal(params: GetReviewsForMeal$Params, context?: HttpContext): Observable<Array<Review>> {
    return this.getReviewsForMeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Review>>): Array<Review> => r.body)
    );
  }

  /** Path part for operation `deleteReview()` */
  static readonly DeleteReviewPath = '/reviews/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReview()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReview$Response(params: DeleteReview$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteReview(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteReview$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReview(params: DeleteReview$Params, context?: HttpContext): Observable<void> {
    return this.deleteReview$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
