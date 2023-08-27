import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives-styling',
  templateUrl: './attribute-directives-styling.component.html',
  styleUrls: ['./attribute-directives-styling.component.css'],
})
export class AttributeDirectivesStylingComponent {
  isTruthy = true;

  changeClasses() {
    return {
      green: this.isTruthy,
      big: this.isTruthy,
      small: !this.isTruthy,
      red: !this.isTruthy,
    };
  }
}
