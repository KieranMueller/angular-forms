import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css'],
})
export class GetComponent {
  data: any;
  complete = false;
  num = undefined;
  constructor(private http: HttpClient) {}

  search() {
    if (!this.num) return;
    this.http
      .get(`https://jsonplaceholder.typicode.com/todos/${this.num}`)
      .subscribe({
        next: (res) => {
          this.num = undefined;
          this.data = res;
        },
        error: (e) => (this.data = 'ERROR ' + JSON.stringify(e)),
        complete: () => {
          this.complete = true;
        },
      });
  }
}
