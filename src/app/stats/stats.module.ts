import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

import { StatsViewComponent } from './stats-view/stats-view.component';
import { StatComponent } from './stat/stat.component';

import { StatsService } from './stats.service';

@NgModule({
  declarations: [StatsViewComponent, StatComponent],
  providers: [StatsService],
  imports: [CommonModule, PipesModule],
  exports: [StatsViewComponent, StatComponent],
})
export class StatsModule {}
