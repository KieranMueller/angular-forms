import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authguardnav',
  templateUrl: './authguardnav.component.html',
  styleUrls: ['./authguardnav.component.css'],
})
export class AuthguardnavComponent implements OnInit {
  isLoggedIn = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
