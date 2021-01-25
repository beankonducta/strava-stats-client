import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = true;

  constructor(private http: HttpClient) { }

  connect() {
  }

  fetchToken(key: any) {
  }

  checkIsLoggedIn() {
    return false;
  }

}
