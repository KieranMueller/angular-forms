import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css'],
})
export class OutputChildComponent {
  @Output() emitter = new EventEmitter<string>();
  message = '';

  emitEvent() {
    this.emitter.emit(this.message);
    this.message = '';
  }
}
