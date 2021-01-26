import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private authService: AuthService) {
  }

  get stats() {
    return this.authService.stats;
  }

  get times() {
    return this.authService.times;
  }
}
