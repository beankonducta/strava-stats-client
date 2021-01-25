import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;

  constructor(private http: HttpClient) { }

  fetchToken(code: any, refresh: boolean) {
    const body = {
      code: code,
      grant_type: refresh? "refresh_token" : "authorization_code"
    }

    this.http.post('http://localhost:3000/auth/token', body)
      .pipe(take(1))
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Code'));
  }

  checkIsLoggedIn() {
    return false;
  }

  saveToken(data: any) {
    this.isLoggedIn = true;
    console.log(data);
  }
}
