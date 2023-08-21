import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
})
export class MaterialsComponent {
  options = ['cat', 'dog', 'fish', 'rhino', 'lizard'];
  filteredOptions = new Observable<string[]>();

  form = new FormGroup({
    myControl: new FormControl('', Validators.required),
  });
}
