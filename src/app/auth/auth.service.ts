import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;

  constructor(private http: HttpClient, private router: Router) { }

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
    return this.isLoggedIn;
  }

  saveToken(data: any) {
    this.isLoggedIn = true;
    this.router.navigate(['stats']);
    console.log(this.isLoggedIn);
    // save token in cookie here

    // test api call below

    // this.http.get(`http://localhost:3000/athletes/${data.athlete.id}/avgmile?token=${data.access_token}`)
    // .pipe(take(1))
    // .subscribe(
    //   res => console.log(res)
    // )
  }
}
