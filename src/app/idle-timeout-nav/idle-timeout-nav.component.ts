import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idle-timeout-nav',
  templateUrl: './idle-timeout-nav.component.html',
  styleUrls: ['./idle-timeout-nav.component.css'],
})
export class IdleTimeoutNavComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['idle-dash']);
  }
}
