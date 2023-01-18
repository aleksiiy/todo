import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  value: string = '1'
  constructor() { }

  getValue() {
    return this.value;
  }

  set setValue(newValue: string) {
    this.value = newValue;
  }
}
