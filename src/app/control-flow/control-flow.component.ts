import { Component, OnInit } from '@angular/core';
import { ControlFlowNavComponent } from './control-flow-nav/control-flow-nav.component';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [ControlFlowNavComponent, CommonModule],
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent implements OnInit {
  // variable
  happy = true;
  donkeys = [
    { name: 'Pedro', color: 'Grey', age: 5 },
    { name: 'Melvin', color: 'White', age: 2 },
    { name: 'Zeus', color: 'Brown', age: 9 },
  ];

  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.updateTag({
      name: 'Angular Toolbox',
      content:
        'Information about the new control flow syntax introduced in Angular 17 and 18, designed to replace the need for structural directives like *ngif, *ngfor',
    });
  }

  // function returns the value of happy variable
  isHappy() {
    return this.happy;
  }

  randomizeDonkeys() {
    const names = [
      'Leo',
      'Reid',
      'Kieran',
      'Jack',
      'Peter',
      'Ryan',
      'Belfry',
      'Luna',
      'Gaara',
      'Tango',
    ];
    const colors = [
      'Red',
      'Blue',
      'Orange',
      'Black',
      'Graphite',
      'Tan',
      'Burgundy',
      'Aqua',
    ];
    for (let donkey of this.donkeys) {
      donkey.name = names[Math.floor(Math.random() * names.length)];
      donkey.color = colors[Math.floor(Math.random() * colors.length)];
      donkey.age = Math.floor(Math.random() * 10) + 1;
    }
  }

  removeAllDonkeys() {
    if (this.donkeys.length > 0) {
      this.donkeys = [];
    } else {
      this.donkeys = [
        { name: 'Pedro', color: 'Grey', age: 5 },
        { name: 'Melvin', color: 'White', age: 2 },
        { name: 'Zeus', color: 'Brown', age: 9 },
      ];
    }
  }
}
