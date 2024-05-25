import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private userUrl="http://localhost:8081/users";
  constructor(private http:HttpClient) { }

  createUser(user:any):Observable<any>{
    return this.http.post<any>(this.userUrl,user)
  }
  getById(userId:Number):Observable<any>{
    return this.http.get<any>(`${this.userUrl}/${userId}`);
  }
  getAllUsers():Observable<any[]>{
    return this.http.get<any[]>(this.userUrl);
  }

  updateUser(userId: number, userDetails: any): Observable<any> {
    return this.http.put(`${this.userUrl}/update/${userId}`, userDetails);
  }
}
