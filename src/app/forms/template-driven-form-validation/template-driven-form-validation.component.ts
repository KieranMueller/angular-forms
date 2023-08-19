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
  ts = `
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
  `;
  html = `
  <label for="name">Name</label>
  <form #myForm="ngForm" (ngSubmit)="onSubmit()">
    <input
      type="text"
      id="name"
      name="name"
      required
      minlength="4"
      maxlength="10"
      [(ngModel)]="hero.name"
      #name="ngModel"
    />
    <button type="submit" [disabled]="myForm.invalid">Submit</button>
  </form>
  <div *ngIf="name.invalid && (name.dirty || name.touched)" class="alert">
    <p *ngIf="name.errors?.['required']">Name is required.</p>
    <p *ngIf="name.errors?.['minlength']">
      Name must be at least 4 characters long.
    </p>
  </div>
  `;
  showTs = true;
  showHtml = true;

  onSubmit() {
    alert('do something');
  }
}
