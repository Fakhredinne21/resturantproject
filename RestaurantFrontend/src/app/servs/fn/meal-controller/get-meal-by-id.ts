/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Meal } from '../../models/meal';

export interface GetMealById$Params {
  mealId: number;
}

export function getMealById(http: HttpClient, rootUrl: string, params: GetMealById$Params, context?: HttpContext): Observable<StrictHttpResponse<Meal>> {
  const rb = new RequestBuilder(rootUrl, getMealById.PATH, 'get');
  if (params) {
    rb.path('mealId', params.mealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Meal>;
    })
  );
}

getMealById.PATH = '/Meals/{mealId}';
