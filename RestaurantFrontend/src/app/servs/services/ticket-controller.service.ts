/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addTicket } from '../fn/ticket-controller/add-ticket';
import { AddTicket$Params } from '../fn/ticket-controller/add-ticket';
import { buyTicket } from '../fn/ticket-controller/buy-ticket';
import { BuyTicket$Params } from '../fn/ticket-controller/buy-ticket';
import { countAllTicketByUserId } from '../fn/ticket-controller/count-all-ticket-by-user-id';
import { CountAllTicketByUserId$Params } from '../fn/ticket-controller/count-all-ticket-by-user-id';
import { deleteTicket } from '../fn/ticket-controller/delete-ticket';
import { DeleteTicket$Params } from '../fn/ticket-controller/delete-ticket';
import { getAllTicketByUserId } from '../fn/ticket-controller/get-all-ticket-by-user-id';
import { GetAllTicketByUserId$Params } from '../fn/ticket-controller/get-all-ticket-by-user-id';
import { getAllTickets } from '../fn/ticket-controller/get-all-tickets';
import { GetAllTickets$Params } from '../fn/ticket-controller/get-all-tickets';
import { getTicketById } from '../fn/ticket-controller/get-ticket-by-id';
import { GetTicketById$Params } from '../fn/ticket-controller/get-ticket-by-id';
import { sendTicket } from '../fn/ticket-controller/send-ticket';
import { SendTicket$Params } from '../fn/ticket-controller/send-ticket';
import { Ticket } from '../models/ticket';

@Injectable({ providedIn: 'root' })
export class TicketControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllTicketByUserId()` */
  static readonly GetAllTicketByUserIdPath = '/Tickets/user/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTicketByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTicketByUserId$Response(params: GetAllTicketByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ticket>>> {
    return getAllTicketByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTicketByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTicketByUserId(params: GetAllTicketByUserId$Params, context?: HttpContext): Observable<Array<Ticket>> {
    return this.getAllTicketByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Ticket>>): Array<Ticket> => r.body)
    );
  }

  /** Path part for operation `addTicket()` */
  static readonly AddTicketPath = '/Tickets/user/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTicket()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTicket$Response(params: AddTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<Ticket>> {
    return addTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTicket$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTicket(params: AddTicket$Params, context?: HttpContext): Observable<Ticket> {
    return this.addTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ticket>): Ticket => r.body)
    );
  }

  /** Path part for operation `buyTicket()` */
  static readonly BuyTicketPath = '/Tickets/buy/{userId}/{count}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `buyTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  buyTicket$Response(params: BuyTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return buyTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `buyTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  buyTicket(params: BuyTicket$Params, context?: HttpContext): Observable<void> {
    return this.buyTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllTickets()` */
  static readonly GetAllTicketsPath = '/Tickets';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTickets()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTickets$Response(params?: GetAllTickets$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ticket>>> {
    return getAllTickets(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTickets$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTickets(params?: GetAllTickets$Params, context?: HttpContext): Observable<Array<Ticket>> {
    return this.getAllTickets$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Ticket>>): Array<Ticket> => r.body)
    );
  }

  /** Path part for operation `getTicketById()` */
  static readonly GetTicketByIdPath = '/Tickets/{idTicket}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTicketById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicketById$Response(params: GetTicketById$Params, context?: HttpContext): Observable<StrictHttpResponse<Ticket>> {
    return getTicketById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTicketById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicketById(params: GetTicketById$Params, context?: HttpContext): Observable<Ticket> {
    return this.getTicketById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ticket>): Ticket => r.body)
    );
  }

  /** Path part for operation `deleteTicket()` */
  static readonly DeleteTicketPath = '/Tickets/{idTicket}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTicket$Response(params: DeleteTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTicket(params: DeleteTicket$Params, context?: HttpContext): Observable<void> {
    return this.deleteTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `sendTicket()` */
  static readonly SendTicketPath = '/Tickets/send/{senderId}/{receiverId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendTicket$Response(params: SendTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return sendTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sendTicket(params: SendTicket$Params, context?: HttpContext): Observable<void> {
    return this.sendTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `countAllTicketByUserId()` */
  static readonly CountAllTicketByUserIdPath = '/Tickets/count/{idUser}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countAllTicketByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  countAllTicketByUserId$Response(params: CountAllTicketByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return countAllTicketByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countAllTicketByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countAllTicketByUserId(params: CountAllTicketByUserId$Params, context?: HttpContext): Observable<number> {
    return this.countAllTicketByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
