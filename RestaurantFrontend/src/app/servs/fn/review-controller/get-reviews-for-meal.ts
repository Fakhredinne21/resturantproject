/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface GetReviewsForMeal$Params {
  mealId: number;
}

export function getReviewsForMeal(http: HttpClient, rootUrl: string, params: GetReviewsForMeal$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Review>>> {
  const rb = new RequestBuilder(rootUrl, getReviewsForMeal.PATH, 'get');
  if (params) {
    rb.path('mealId', params.mealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Review>>;
    })
  );
}

getReviewsForMeal.PATH = '/reviews/meal/{mealId}';
