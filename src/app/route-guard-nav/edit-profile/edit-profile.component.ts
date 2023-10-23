import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent {
  food = '';
  saved = true;

  save() {
    this.food = '';
    this.saved = true;
  }
}
