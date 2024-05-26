/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ticket } from '../../models/ticket';

export interface GetTicketById$Params {
  idTicket: number;
}

export function getTicketById(http: HttpClient, rootUrl: string, params: GetTicketById$Params, context?: HttpContext): Observable<StrictHttpResponse<Ticket>> {
  const rb = new RequestBuilder(rootUrl, getTicketById.PATH, 'get');
  if (params) {
    rb.path('idTicket', params.idTicket, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Ticket>;
    })
  );
}

getTicketById.PATH = '/Tickets/{idTicket}';
