import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent implements OnInit, OnDestroy {
  data: Object | string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.data = 'waiting for data...';
  }

  ngOnDestroy() {
    this.getData().unsubscribe();
  }

  getData() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe({
        next: (res) => (this.data = res),
        error: (e) => {
          (this.data = 'something went wrong: '), console.log(e);
        },
        complete: () => alert('all done!'),
      });
  }
}
