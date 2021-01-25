import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = true;

  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get<any>(`${this.apiUrl}/`).subscribe(val => {
      // this won't work until we get https on localhost
      console.log(val);
    })
  }

  logout() {

  }
}
