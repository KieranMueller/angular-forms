import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-get',
  templateUrl: './local-get.component.html',
  styleUrls: ['./local-get.component.css'],
})
export class LocalGetComponent implements OnInit {
  name = '';
  age = 0;
  hobbies = [];
  pet = {
    typeOfAnimal: '',
    petName: '',
  };

  ngOnInit() {
    const name = localStorage.getItem('name');
    if (name) this.name = name;
    const age = localStorage.getItem('age');
    if (age) this.age = JSON.parse(age);
    const hobbies = localStorage.getItem('hobbies');
    if (hobbies) this.hobbies = JSON.parse(hobbies);
    const pet = localStorage.getItem('myPet');
    if (pet) this.pet = JSON.parse(pet);
  }
}
