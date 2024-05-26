/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Meal } from '../../models/meal';

export interface GetAllMeals$Params {
}

export function getAllMeals(http: HttpClient, rootUrl: string, params?: GetAllMeals$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Meal>>> {
  const rb = new RequestBuilder(rootUrl, getAllMeals.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Meal>>;
    })
  );
}

getAllMeals.PATH = '/Meals';
