import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authguard',
  templateUrl: './authguard.component.html',
  styleUrls: ['./authguard.component.css'],
})
export class AuthguardComponent implements OnInit {
  username = '';
  password = '';
  error = false;
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  login() {
    if (this.username === 'letmein' && this.password === 'jasper')
      this.authService.login();
    else {
      this.username = '';
      this.password = '';
      this.error = true;
    }
  }

  logout() {
    this.authService.logout();
  }
}
