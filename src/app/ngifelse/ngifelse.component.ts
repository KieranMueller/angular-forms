import { Component } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css'],
})
export class NgifelseComponent {
  selected = true;
  snippet = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ngifelse',
    templateUrl: './ngifelse.component.html',
    styleUrls: ['./ngifelse.component.css'],
  })
  export class NgifelseComponent {
    selected = true;
  }
  `;
  snippet1 = `
  <div *ngIf="selected; else notSelected">Show me if 'selected = true'</div>
  <ng-template #notSelected>
    <div>Show me if 'selected = false'</div>
  </ng-template>
  <button (click)="selected = !selected">selected = {{ selected }}</button>
  `;
  showHtml = true;
  showTs = true;
}
