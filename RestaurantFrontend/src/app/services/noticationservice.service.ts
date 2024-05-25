import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoticationserviceService {
  private notificationUrl="http://localhost:8081/Notifications";
  constructor(private http:HttpClient) { }
  getNotificationByUser(userId:any):Observable<any[]>{
    return this.http.get<any[]>(`${this.notificationUrl}/${userId}`);
  }
}
