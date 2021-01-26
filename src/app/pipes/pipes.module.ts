import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StravaDataPipe } from './strava-data.pipe';

@NgModule({
  declarations: [StravaDataPipe],
  imports: [CommonModule],
  exports: [StravaDataPipe],
})
export class PipesModule {}
