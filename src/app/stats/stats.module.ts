import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsViewComponent } from './stats-view/stats-view.component';
import { StatsService } from './stats.service';
import { StatComponent } from './stat/stat.component'

@NgModule({
  declarations: [StatsViewComponent, StatComponent],
  providers: [StatsService],
  imports: [CommonModule],
  exports: [StatsViewComponent, StatComponent]
})
export class StatsModule { }