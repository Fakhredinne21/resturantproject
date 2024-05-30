import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIdentifierService {
  private _userId!: number;

  getUserId(): number {
    return this._userId;
  }

  setUserId(value: number) {
    this._userId = value;
  }

  isSet(): boolean{
    return this._userId != undefined;
  }

  constructor() {
  }
}
