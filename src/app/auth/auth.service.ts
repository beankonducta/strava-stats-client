import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn: boolean;

  times: any;
  stats: any;

  constructor(private http: HttpClient, private router: Router) {}

  fetchToken(code: any, refresh: boolean) {
    const body = {
      code: code,
      grant_type: refresh ? 'refresh_token' : 'authorization_code',
    };

    this.http
      .post('http://localhost:3000/auth/token', body)
      .pipe(take(1))
      .subscribe(
        (data) => this.saveToken(data),
        (err) => alert('Invalid Code')
      );
  }

  checkIsLoggedIn() {
    return this.isLoggedIn;
  }

  saveToken(data: any) {
    this.isLoggedIn = true;
    this.router.navigate(['stats']);
    // save token in cookie here
    // test api call below

    this.times = this.http.get(`http://localhost:3000/athletes/${data.athlete.id}/avg_mile_time?token=${data.access_token}`)

    this.stats = this.http.get(`http://localhost:3000/athletes/${data.athlete.id}/stats?token=${data.access_token}`)
  }
}
