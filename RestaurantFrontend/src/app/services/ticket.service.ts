import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticketUrl:String="http://localhost:8080/Tickets";
  constructor(private http:HttpClient) { }
  buyTicket(userId:any,nbtick:number):Observable<any>{
    return this.http.get<any>(`${this.ticketUrl}/$\{userId}${nbtick}`)
  }
}
