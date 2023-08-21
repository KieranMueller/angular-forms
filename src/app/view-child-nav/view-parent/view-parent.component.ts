import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css'],
})
export class ViewParentComponent {
  @ViewChild(ViewChildComponent, { static: true }) child?: ViewChildComponent;
  parentTs = `
  import { Component, ViewChild } from '@angular/core';
  import { ViewChildComponent } from '../view-child.component';

  @Component({
    selector: 'app-view-parent',
    templateUrl: './view-parent.component.html',
    styleUrls: ['./view-parent.component.css'],
  })
  export class ViewParentComponent {
    @ViewChild(ViewChildComponent, { static: true }) child?: ViewChildComponent;

    increment() {
      this.child?.increment();
    }

    decrement() {
      this.child?.decrement();
    }
  }
  `;
  parentHtml = `
  <h3>parent</h3>
  <button (click)="decrement()">decrement</button>
  <button (click)="increment()">increment</button>
  `;
  childTs = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-view-child',
    templateUrl: './view-child.component.html',
    styleUrls: ['./view-child.component.css'],
  })
  export class ViewChildComponent {
    count = 0;

    increment() {
      this.count++;
    }

    decrement() {
      this.count--;
    }
  }
  `;
  childHtml = `
  <h3>child</h3>
  <p>{{ count }}</p>
  `;
  showParentTs = true;
  showParentHtml = true;
  showChildTs = true;
  showChildHtml = true;

  increment() {
    this.child?.increment();
  }

  decrement() {
    this.child?.decrement();
  }
}
