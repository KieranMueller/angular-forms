import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
})
export class AsyncComponent {
  url = `https://jsonplaceholder.typicode.com/todos/1`;
  data: Observable<Object> = this.http.get(this.url);
  moreData: Observable<Object> | undefined;
  showHtml = true;
  showTs = true;
  snippet = `
  import { HttpClient } from '@angular/common/http';
  import { Component } from '@angular/core';
  import { Observable } from 'rxjs/internal/Observable';

  @Component({
    selector: 'app-async',
    templateUrl: './async.component.html',
    styleUrls: ['./async.component.css'],
  })
  export class AsyncComponent {
    url = 'https://jsonplaceholder.typicode.com/todos/1';
    data: Observable<Object> = this.http.get(this.url);
    moreData: Observable<Object> | undefined;

    constructor(private http: HttpClient) {}

    getData() {
      this.moreData = this.http.get(this.url);
    }
  `;
  snippet2 = `
  <button (click)="getData()">Send GET request</button>
  <p>data: {{ data | async | json }}</p>
  <p>moreData: {{ moreData | async | json }}</p>
  `;

  constructor(private http: HttpClient) {}

  getData() {
    this.moreData = this.http.get(this.url);
  }
}
