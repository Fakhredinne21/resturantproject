import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketUrl="http://localhost:8081/api/v1/Tickets";
  private buy="buy";
  private user="user";

  constructor(private http:HttpClient) { }
  buyTicket(userId:any,count:number):Observable<any>{
    return this.http.post<any>(`${this.ticketUrl}/${this.buy}/${userId}/${count}`,count);
  }
  getAllTicketsOfUser(userId:any):Observable<any[]>{
    return this.http.get<any[]>(`${this.ticketUrl}/${this.user}/${userId}`);
  }
}
