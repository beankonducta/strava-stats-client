import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthViewComponent } from './auth/auth-view/auth-view.component';
import { StatsViewComponent } from './stats/stats-view/stats-view.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'auth', component: AuthViewComponent },
  { path: 'strava', redirectTo: 'https://www.strava.com/oauth/authorize?client_id=44502&response_type=code&redirect_uri=https://localhost:4200/auth&approval_prompt=force&scope=activity:read'},
  { path: 'stats', component: StatsViewComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
