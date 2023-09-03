import { Component, OnDestroy, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-sub-sink',
  templateUrl: './sub-sink.component.html',
  styleUrls: ['./sub-sink.component.css'],
})
export class SubSinkComponent implements OnInit, OnDestroy {
  subs = new SubSink();
  numbers: number[] = [];
  moreNumbers: number[] = [];

  ngOnInit(): void {
    this.subs.add(of(1, 2, 3, 4).subscribe((res) => this.numbers.push(res)));
    this.subs.add(
      of(100, 200, 300, 400).subscribe((res) => this.moreNumbers.push(res))
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
