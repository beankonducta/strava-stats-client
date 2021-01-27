import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css'],
})
export class AuthViewComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // check if we're logged in
    console.log('checking log in status');
    this.isLoggedIn = this.authService.checkIsLoggedIn();
    if (this.isLoggedIn) this.router.navigate(['/stats']);
    // check if URL contains code
    let code = window.location.href.indexOf('code');
    // if not logged in but have code - try to authenticate
    if (!this.isLoggedIn && code != -1) {
      this.authService.fetchToken(
        window.location.href.substring(code + 5),
        false
      );
    }
  }

  // connects to strava, returns token
  connect() {
    window.location.href =
      'https://www.strava.com/oauth/authorize?client_id=44502&response_type=code&redirect_uri=https://localhost:4200/auth&approval_prompt=force&scope=activity:read';
  }
}
