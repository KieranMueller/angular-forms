import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
