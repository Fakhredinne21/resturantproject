/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Review } from '../../models/review';

export interface GetReviewsByUser$Params {
  userId: number;
}

export function getReviewsByUser(http: HttpClient, rootUrl: string, params: GetReviewsByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Review>>> {
  const rb = new RequestBuilder(rootUrl, getReviewsByUser.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
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

getReviewsByUser.PATH = '/reviews/user/{userId}';
