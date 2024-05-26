/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Meal } from '../../models/meal';

export interface MealCreation$Params {
      body: Meal
}

export function mealCreation(http: HttpClient, rootUrl: string, params: MealCreation$Params, context?: HttpContext): Observable<StrictHttpResponse<Meal>> {
  const rb = new RequestBuilder(rootUrl, mealCreation.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

mealCreation.PATH = '/Meals';
