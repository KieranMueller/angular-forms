import { Component, OnInit } from '@angular/core';
import { first, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-first',
  templateUrl: './rxjs-first.component.html',
  styleUrls: ['./rxjs-first.component.css'],
})
export class RxjsFirstComponent implements OnInit {
  numbers: number[] = [];

  ngOnInit(): void {
    of(1, 2, 3, 4)
      .pipe(first())
      .subscribe((res) => this.numbers.push(res));
  }
}
