import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-of-pipe-map',
  templateUrl: './of-pipe-map.component.html',
  styleUrls: ['./of-pipe-map.component.css'],
})
export class OfPipeMapComponent implements OnInit {
  numbers: number[] = [];

  ngOnInit(): void {
    of(1, 2, 3, 4)
      .pipe(map((x) => x * x))
      .subscribe((res) => this.numbers.push(res));
  }
}
