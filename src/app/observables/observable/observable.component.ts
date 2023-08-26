import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  number = 0;

  number$ = new Observable<number>((observer) => {
    let num = 0;
    setInterval(() => {
      observer.next((num += 2));
    }, 1000);
  });

  ngOnInit(): void {
    this.number$.subscribe((data) => (this.number = data));
  }
}
