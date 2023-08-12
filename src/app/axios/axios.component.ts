import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-axios',
  templateUrl: './axios.component.html',
  styleUrls: ['./axios.component.css'],
})
export class AxiosComponent {
  url = 'https://jsonplaceholder.typicode.com/todos/1';
  data: any;

  getStuff() {
    axios
      .get(this.url)
      .then((res) => (this.data = res.data))
      .catch((e) => alert(e));
  }

  getError() {
    this.url = 'https://jsonplaceholder.typicode.com/todos/hey';
    this.getStuff();
    this.url = 'https://jsonplaceholder.typicode.com/todos/1';
  }
}
