import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent {
  newAnimal = { type: '', name: '', color: '' };
  animals = [
    { type: 'cat', name: 'jasper', color: 'black' },
    { type: 'dog', name: 'rex', color: 'gold' },
    { type: 'lizard', name: 'pap', color: 'green' },
  ];

  snippet = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-ngfor',
    templateUrl: './ngfor.component.html',
    styleUrls: ['./ngfor.component.css'],
  })
  export class NgforComponent {
    newAnimal = { type: '', name: '', color: '' };
    animals = [
      { type: 'cat', name: 'jasper', color: 'black' },
      { type: 'dog', name: 'rex', color: 'gold' },
      { type: 'lizard', name: 'pap', color: 'green' },
    ];

    add() {
      this.animals.push(this.newAnimal);
      this.newAnimal = { type: '', name: '', color: '' };
    }

    delete(animal: any) {
      this.animals.splice(this.animals.indexOf(animal), 1);
    }
  }

  `;
  snippet1 = `
  <app-ngifnav></app-ngifnav>
  <p>(click item to remove)</p>
  <div class="inner">
    <ul *ngFor="let animal of animals" (click)="delete(animal)">
      <h3>{{ animal.type }}</h3>
      <li>{{ animal.name }}</li>
      <li>{{ animal.color }}</li>
      <br />
    </ul>
  </div>
  <form #myForm="ngForm" (ngSubmit)="add()">
    <input
      type="text"
      placeholder="type"
      name="type"
      [(ngModel)]="newAnimal.type"
      required
    />
    <input
      type="text"
      placeholder="name"
      name="name"
      [(ngModel)]="newAnimal.name"
      required
    />
    <input
      type="text"
      placeholder="color"
      name="color"
      [(ngModel)]="newAnimal.color"
      required
    />
    <button [disabled]="myForm.invalid">Add Animal</button>
  </form>

  `;
  showHtml = true;
  showTs = true;

  add() {
    this.animals.push(this.newAnimal);
    this.newAnimal = { type: '', name: '', color: '' };
  }

  delete(animal: any) {
    this.animals.splice(this.animals.indexOf(animal), 1);
  }
}
