import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css'],
})
export class ForkjoinComponent {
  one = 23;
  oneLoading = false;
  two = 12;
  twoLoading = false;

  getData() {
    this.oneLoading = true;
    this.twoLoading = true;
    setTimeout(() => {
      this.one += 10;
      this.oneLoading = false;
    }, 3000);

    setTimeout(() => {
      this.two += 200;
      this.twoLoading = false;
    }, 1000);
  }

  forkJoin() {
    this.oneLoading = true;
    this.twoLoading = true;
    let oneData = setTimeout(() => {
      this.one += 10;
      this.oneLoading = false;
    }, 3000);

    let twoData = setTimeout(() => {
      this.two += 200;
      this.twoLoading = false;
    }, 1000);

    return forkJoin([oneData, twoData]);
  }
}
