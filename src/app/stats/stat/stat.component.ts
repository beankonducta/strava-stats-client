import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  @Input() stat: String;
  @Input() title: String;
  @Input() type: String;

  constructor() { }

  ngOnInit(): void {
  }

}
