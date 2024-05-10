import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private userUrl:String="http://localhost:8081/users";
  constructor(private http:HttpClient) { }

  createUser(user:any):Observable<any>{
    return this.http.post<any>(`${this.userUrl}`,user)
  }

}
