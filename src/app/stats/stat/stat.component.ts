import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css'],
  animations: [
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: "0" }),
        animate(".3s ease-in", style({ opacity: "1" })),
      ]),
    ]),
  ],
})
export class StatComponent implements OnInit {

  @Input() stat: String;
  @Input() title: String;
  @Input() type: String;

  constructor() { }

  ngOnInit(): void {
  }

}
