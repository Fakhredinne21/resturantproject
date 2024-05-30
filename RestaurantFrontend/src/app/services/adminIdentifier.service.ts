import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminIdentifierService {
  private _adminId!: number;

  getAdminId(): string {
    return localStorage.getItem('userId') as string;
  }

  setAdminId(value: number) {
    localStorage.setItem('userId', String(value));
    this._adminId = value;
  }

  isSet(): boolean{
    return this._adminId != undefined;
  }

  constructor() {
  }
}
