import { Component } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css'],
})
export class DatePipeComponent {
  today = new Date();
  snippet = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-date-pipe',
    templateUrl: './date-pipe.component.html',
    styleUrls: ['./date-pipe.component.css'],
  })
  export class DatePipeComponent {
    today = new Date();
  }
  `;
  snippet2 = `
  <p>{{ today | date : "short" }}</p>
  <p>{{ today | date : "medium" }}</p>
  <p>{{ today | date : "long" }}</p>
  <p>{{ today | date : "full" }}</p>
  <p>{{ today | date : "shortDate" }}</p>
  <p>{{ today | date : "mediumDate" }}</p>
  <p>{{ today | date : "longDate" }}</p>
  <p>{{ today | date : "fullDate" }}</p>
  <p>{{ today | date : "shortTime" }}</p>
  <p>{{ today | date : "mediumTime" }}</p>
  <p>{{ today | date : "longTime" }}</p>
  <p>{{ today | date : "fullTime" }}</p>
  `;
  showTs = true;
  showHtml = true;
}
