import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsViewComponent } from './stats-view/stats-view.component';
import { StatsService } from './stats.service'

@NgModule({
  declarations: [StatsViewComponent],
  providers: [StatsService],
  imports: [CommonModule],
  exports: [StatsViewComponent]
})
export class StatsModule { }