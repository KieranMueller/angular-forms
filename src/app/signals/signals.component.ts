import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
})
export class SignalsComponent {
  num = signal(1);

  increment() {
    this.num.update((prev) => prev + 1);
  }

  decrement() {
    this.num.update((prev) => (prev -= 1));
  }

  reset() {
    this.num.set(1);
  }
}
