import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  strings = ["Saab", "Volvo", "BMW", "Saab2", "Volvo2", "BMW2"];

  constructor() { }

  ngOnInit() {
  }

}
