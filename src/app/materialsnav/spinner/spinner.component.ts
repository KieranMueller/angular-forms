import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  data = 0;
  isLoading = false;

  getData() {
    this.isLoading = true;
    setTimeout(() => {
      this.data += 100;
      this.isLoading = false;
    }, 2000);
  }
}
