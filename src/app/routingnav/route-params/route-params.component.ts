import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.css'],
})
export class RouteParamsComponent {
  customId: any;

  constructor(private router: Router) {}

  handleEnter() {
    if (this.customId)
      this.router.navigateByUrl(`/test-param/${this.customId}`);
  }
}
