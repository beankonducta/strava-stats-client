import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthViewComponent } from './auth/auth-view/auth-view.component';
import { StatsViewComponent } from './stats/stats-view/stats-view.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'stats', pathMatch: 'full' },
  { path: '**', redirectTo: '/stats' },
  { path: 'auth', component: AuthViewComponent, canActivate: [AuthGuard] },
  { path: 'stats', component: StatsViewComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
