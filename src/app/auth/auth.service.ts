import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  times: any;
  stats: any;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}

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
    return this.cookieService.check('strava_auth');
  }

  saveToken(data: any) {
    this.cookieService.set('strava_auth', data.access_token, data.expires_at);
    this.cookieService.set('strava_refresh', data.refresh_token);
    this.router.navigate(['stats']);
  }
}