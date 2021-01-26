import { Component, OnInit } from '@angular/core';

import { StatComponent } from '../stat/stat.component';

import { StatsService } from '../stats.service';

@Component({
  selector: 'app-stats-view',
  templateUrl: './stats-view.component.html',
  styleUrls: ['./stats-view.component.css']
})
export class StatsViewComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
  }

  get stats() {
    return this.statsService.stats;
  }

  get times() {
    return this.statsService.times;
  }

}