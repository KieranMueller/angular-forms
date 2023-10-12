import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hasName = false;
  name = '';

  ngOnInit() {
    const name = localStorage.getItem('nickname');
    if (name) {
      this.name = name;
      this.hasName = true;
    }
  }

  setName() {
    this.hasName = true;
    localStorage.setItem('nickname', this.name);
  }

  editName() {
    this.hasName = false;
  }
}
