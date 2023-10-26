import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scss',
  templateUrl: './scss.component.html',
  styleUrls: ['./scss.component.css'],
})
export class ScssComponent implements OnInit {
  sections = {
    '': 'SCSS',
    advanced1: 'Advanced SCSS',
    disabled1: 'Sass',
  };
  scroll = false;

  constructor() {}

  ngOnInit() {}
}
