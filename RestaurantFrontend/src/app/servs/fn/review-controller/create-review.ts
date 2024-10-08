/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface CreateReview$Params {
  userId: number;
  mealId: number;
      body: Review
}

export function createReview(http: HttpClient, rootUrl: string, params: CreateReview$Params, context?: HttpContext): Observable<StrictHttpResponse<Review>> {
  const rb = new RequestBuilder(rootUrl, createReview.PATH, 'post');
  if (params) {
    rb.path('userId', params.userId, {});
    rb.path('mealId', params.mealId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Review>;
    })
  );
}

createReview.PATH = '/reviews/{userId}/{mealId}';
