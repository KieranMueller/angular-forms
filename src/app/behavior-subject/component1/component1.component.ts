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
