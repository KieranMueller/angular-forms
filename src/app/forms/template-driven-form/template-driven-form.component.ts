import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  user = {
    firstName: '',
    password: '',
  };
  ts = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-template-driven-form',
    templateUrl: './template-driven-form.component.html',
    styleUrls: ['./template-driven-form.component.css'],
  })
  export class TemplateDrivenFormComponent {
    user = {
      firstName: '',
      password: '',
    };

    placeholder = {
      firstName: 'Kieran',
      password: 'password',
    };

    onSubmit() {
      alert('do something');
    }
  }
  `;
  html = `
  <form #myForm="ngForm" (ngSubmit)="onSubmit()">
    <p>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        [(ngModel)]="user.firstName"
        [placeholder]="placeholder.firstName"
        required
      />
    </p>
    <p>
      <label>Password:</label>
      <input
        type="password"
        name="password"
        [(ngModel)]="user.password"
        [placeholder]="placeholder.password"
        required
      />
    </p>
    <p>
      <button type="submit" [disabled]="!myForm.valid">Submit</button>
    </p>
  </form>
  <div>
    <h2>Results</h2>
    <p>First Name: {{ user.firstName }}</p>
    <p>Password: {{ user.password }}</p>
  </div>
  `;
  showTs = true;
  showHtml = true;

  placeholder = {
    firstName: 'Kieran',
    password: 'password',
  };

  onSubmit() {
    alert('do something');
  }
}
