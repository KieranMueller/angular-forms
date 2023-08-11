import { Component } from '@angular/core';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.css'],
})
export class InputMaskComponent {
  phone = '';
  onSubmit() {
    alert('do something');
  }
}
