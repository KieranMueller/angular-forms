import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-memory-leak',
  templateUrl: './memory-leak.component.html',
  styleUrls: ['./memory-leak.component.css'],
})
export class MemoryLeakComponent {
  myObservable = interval(1000).subscribe((data) => console.log(data));

  stopTheMadness() {
    this.myObservable.unsubscribe();
  }
}
