import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminIdetifierService {
  private _adminId!: number;

  getadminId(): number {
    return this._adminId;
  }

  setadminId(value: number) {
    this._adminId = value;
  }

  constructor() {
  }
}
