import { Component } from '@angular/core';

@Component({
  selector: 'app-local-set',
  templateUrl: './local-set.component.html',
  styleUrls: ['./local-set.component.css'],
})
export class LocalSetComponent {
  name = '';
  age: number | undefined = undefined;
  hobbies = '';
  myPet = {
    typeOfAnimal: '',
    petName: '',
  };

  save() {
    // setting a string in local storage
    localStorage.setItem('name', this.name);
    // setting a number by converting it to a string
    localStorage.setItem('age', JSON.stringify(this.age));
    // creating an array out of the hobbies string
    const hobbyArray = this.hobbies.split(', ');
    localStorage.setItem('hobbies', JSON.stringify(hobbyArray));
    // setting an object in local storage
    localStorage.setItem('myPet', JSON.stringify(this.myPet));
    // irrelevant - resetting input fields upon submit
    this.name = '';
    this.age = undefined;
    this.hobbies = '';
    this.myPet.typeOfAnimal = '';
    this.myPet.petName = '';
  }
}
