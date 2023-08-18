import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent {
  showParentHtml = true;
  showParentTs = true;
  showChildHtml = true;
  showChildTs = true;
  parentHtml = `
  <h3>parent</h3>
  <p>{{ messageFromChild }}</p>
  <app-output-child (emitter)="receiveEvent($event)"></app-output-child>
  `;
  parentTs = `
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
  `;
  childHtml = `
  <h3>child</h3>
  <input type="text" [(ngModel)]="message" />
  <button [disabled]="message === ''" (click)="emitEvent()">emit event</button>
  `;
  childTs = `
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
  `;
}
