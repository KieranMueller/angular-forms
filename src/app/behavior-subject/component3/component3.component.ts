import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../behavior.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
})
export class Component3Component implements OnInit {
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
    this.service.updateMessage(message + ' -> #3');
  }
}
