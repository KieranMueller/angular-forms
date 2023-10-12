import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-delete',
  templateUrl: './local-delete.component.html',
  styleUrls: ['./local-delete.component.css'],
})
export class LocalDeleteComponent implements OnInit {
  myDataExists = false;
  petDataExists = false;

  ngOnInit() {
    // Just checking if this data exists in local storage for
    // buttons to be disabled or enabled on page load
    if (
      localStorage.getItem('name') ||
      localStorage.getItem('age') ||
      localStorage.getItem('hobbies')
    )
      this.myDataExists = true;
    if (localStorage.getItem('myPet')) this.petDataExists = true;
  }

  removeMyData() {
    this.myDataExists = false;
    localStorage.removeItem('name');
    localStorage.removeItem('age');
    localStorage.removeItem('hobbies');
  }

  removePetData() {
    this.petDataExists = false;
    localStorage.removeItem('myPet');
  }
}
