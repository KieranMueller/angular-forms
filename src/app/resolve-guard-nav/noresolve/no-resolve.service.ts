import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable({
  providedIn: 'root',
})
export class NoResolveService {
  constructor(private http: HttpClient) {}

  getStuff() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .pipe(delay(2000));
  }
}
