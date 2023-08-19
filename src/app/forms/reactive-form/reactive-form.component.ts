import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  placeholder = {
    firstName: 'Kieran',
    password: 'password',
  };

  ts = `
  import { Component } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';

  @Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.css'],
  })
  export class ReactiveFormComponent {
    form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

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
  <h1>Reactive Form Example:</h1>
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <p>
      <label>First Name:</label>
      <input
        type="text"
        formControlName="firstName"
        [placeholder]="placeholder.firstName"
      />
    </p>
    <p>
      <label>Password:</label>
      <input
        type="password"
        formControlName="password"
        [placeholder]="placeholder.password"
      />
    </p>
    <p>
      <button type="submit" [disabled]="!form.valid">Submit</button>
    </p>
  </form>
  <div>
    <h2>Results</h2>
    <p>First Name: {{ form.value.firstName }}</p>
    <p>Password: {{ form.value.password }}</p>
  </div>
  `;
  showTs = true;
  showHtml = true;

  onSubmit() {
    alert('do something');
  }
}
