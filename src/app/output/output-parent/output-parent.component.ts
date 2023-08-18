import { Component } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css'],
})
export class OutputParentComponent {
  messageFromChild = '';

  receiveEvent(message: string) {
    this.messageFromChild = message;
  }
}
