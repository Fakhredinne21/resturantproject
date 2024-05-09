import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionserviceService {

  private subUrl="http://localhost:8081/Subscription";
  constructor(private http: HttpClient) {}


  getAllSubscritpion(): Observable<any[]> {
    return this.http.get<any[]>(this.subUrl);
  }
}
