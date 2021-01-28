import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  stats: any;
  times: any;
  name: any;

  constructor(private http: HttpClient, private cookieService: CookieService, private authService: AuthService) {
    this.fetchData();
  }

  fetchData() {
    if(!this.cookieService.check('strava_auth')) { 
      this.authService.fetchToken(this.cookieService.get('refresh_token'), true);
    }
    const access = this.cookieService.get('strava_auth');
    this.http.get(`http://localhost:3000/athlete?token=${access}`).pipe(take(1)).subscribe((athlete: any) => {
      this.name = `${athlete.firstname} ${athlete.lastname}`;
      this.times = this.http.get(`http://localhost:3000/athletes/${athlete.id}/avg_mile_time?token=${access}`);
      this.stats = this.http.get(`http://localhost:3000/athletes/${athlete.id}/stats?token=${access}`);
    })
  }
}
