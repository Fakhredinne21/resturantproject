/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getHistoriesByDate } from '../fn/history-controller/get-histories-by-date';
import { GetHistoriesByDate$Params } from '../fn/history-controller/get-histories-by-date';
import { saveHistory } from '../fn/history-controller/save-history';
import { SaveHistory$Params } from '../fn/history-controller/save-history';

@Injectable({ providedIn: 'root' })
export class HistoryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveHistory()` */
  static readonly SaveHistoryPath = '/History';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  saveHistory$Response(params: SaveHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return saveHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  saveHistory(params: SaveHistory$Params, context?: HttpContext): Observable<void> {
    return this.saveHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getHistoriesByDate()` */
  static readonly GetHistoriesByDatePath = '/History/date/{date}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHistoriesByDate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHistoriesByDate$Response(params: GetHistoriesByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getHistoriesByDate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getHistoriesByDate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHistoriesByDate(params: GetHistoriesByDate$Params, context?: HttpContext): Observable<number> {
    return this.getHistoriesByDate$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
