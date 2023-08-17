import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css'],
})
export class NgswitchComponent {
  count = 0;
  ts = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ngswitch',
    templateUrl: './ngswitch.component.html',
    styleUrls: ['./ngswitch.component.css'],
  })
  export class NgswitchComponent {
    count = 0;
  }
  `;
  html = `
<p>
  <button (click)="count = count - 1">-</button> count: {{ count }}
  <button (click)="count = count + 1">+</button>
</p>
<div [ngSwitch]="count">
  <p *ngSwitchCase="-4">count is -4</p>
  <p *ngSwitchCase="-2">count is -2</p>
  <p *ngSwitchCase="0">count is 0</p>
  <p *ngSwitchCase="2">count is 2</p>
  <p *ngSwitchCase="4">count is 4</p>
  <p *ngSwitchDefault>default!</p>
</div>
  `;
  showHtml = true;
  showTs = true;
}
