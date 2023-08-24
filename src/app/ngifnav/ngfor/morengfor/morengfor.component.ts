import { Component } from '@angular/core';

@Component({
  selector: 'app-morengfor',
  templateUrl: './morengfor.component.html',
  styleUrls: ['./morengfor.component.css'],
})
export class MorengforComponent {
  html = `
<ul *ngFor="let animal of animals; let i = index; trackBy: getId">
  <h3>{{ i + 1 }}</h3>
  <h4>{{ animal.name }}</h4>
  <h4>{{ animal.color }}</h4>
</ul>
<button (click)="refresh()">refresh</button>
  `;
  ts = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-morengfor',
    templateUrl: './morengfor.component.html',
    styleUrls: ['./morengfor.component.css'],
  })
  export class MorengforComponent {
    animals = [
      { id: 1, name: 'cat', color: 'black' },
      { id: 2, name: 'dog', color: 'gold' },
      { id: 3, name: 'lizard', color: 'green' },
      { id: 4, name: 'turtle', color: 'green' },
    ];

    refresh() {
      this.animals = [
        { id: 1, name: 'cat', color: 'black' },
        { id: 2, name: 'dog', color: 'gold' },
        { id: 3, name: 'lizard', color: 'green' },
        { id: 4, name: 'big turtle', color: 'green' },
      ];
    }

    getId(index: number, item: any) {
      return item.id;
    }
  }
  `;
  showHtml = true;
  showTs = true;

  animals = [
    { id: 1, name: 'cat', color: 'black' },
    { id: 2, name: 'dog', color: 'gold' },
    { id: 3, name: 'lizard', color: 'green' },
    { id: 4, name: 'turtle', color: 'green' },
  ];

  refresh() {
    this.animals = [
      { id: 1, name: 'cat', color: 'black' },
      { id: 2, name: 'dog', color: 'gold' },
      { id: 3, name: 'lizard', color: 'green' },
      { id: 4, name: 'big turtle', color: 'green' },
    ];
  }

  getId(index: number, item: any) {
    return item.id;
  }
}
