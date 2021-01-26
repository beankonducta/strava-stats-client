import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  @Input() stat: String | 'stat';
  @Input() title: String | 'title';
  @Input() type: String | 'null';

  constructor() { }

  ngOnInit(): void {
  }

}
