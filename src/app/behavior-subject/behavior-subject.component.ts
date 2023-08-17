import { Component } from '@angular/core';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent {
  showHtml = true;
  showTs = true;
  showService = true;
  ts = `
  import { Component, OnInit } from '@angular/core';
  import { BehaviorService } from '../behavior.service';

  @Component({
    selector: 'app-component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.css'],
  })
  export class Component1Component implements OnInit {
    message = '';

    constructor(private service: BehaviorService) {}

    ngOnInit() {
      this.service.currentMessage.subscribe(
        (message) => (this.message = message)
      );
    }

    updateMessage(message: string) {
      if (message === '') {
        this.service.updateMessage('');
        return;
      }
      this.service.updateMessage(message + ' -> #1');
    }
  }
  `;
  html = `
  <div class="outer">
  <p>component 1</p>
  <p>{{ message }}</p>
  <input type="text" #test (keyup)="updateMessage(test.value)" />
  </div>
  `;
  service = `
  import { Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';

  @Injectable({
    providedIn: 'root',
  })
  export class BehaviorService {
    private messageSource = new BehaviorSubject<string>(
      'hello from behavior service'
    );
    currentMessage = this.messageSource.asObservable();

    constructor() {}

    updateMessage(message: string) {
      this.messageSource.next(message);
    }
  }
  `;
}
