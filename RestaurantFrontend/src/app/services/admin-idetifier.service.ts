import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminIdetifierService {
  private _adminId!: string;

  getadminId(): string {
    return this._adminId;
  }

  setadminId(value: string) {
    this._adminId = value;
  }

  constructor() {
  }
}
