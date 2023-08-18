import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  parentHtml = `
  <h3>parent</h3>
  <p>increment count <button (click)="count = count + 1">+</button></p>
  <app-child [count]="count"></app-child>
  `;
  parentTs = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.css'],
  })
  export class ParentComponent {
    count = 100;
  }
  `;
  childHtml = `
  <h3>child</h3>
  <p>count is {{ count }}</p>
  `;
  childTs = `
  import { Component, Input } from '@angular/core';

  @Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
  })
  export class ChildComponent {
    @Input() count = 0;
  }
  `;
  showParentHtml = true;
  showParentTs = true;
  showChildHtml = true;
  showChildTs = true;
}
