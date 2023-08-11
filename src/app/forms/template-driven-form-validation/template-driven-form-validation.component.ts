import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-validation',
  templateUrl: './template-driven-form-validation.component.html',
  styleUrls: ['./template-driven-form-validation.component.css'],
})
export class TemplateDrivenFormValidationComponent {
  hero = {
    name: '',
  };

  onSubmit() {
    alert('do something');
  }
}
