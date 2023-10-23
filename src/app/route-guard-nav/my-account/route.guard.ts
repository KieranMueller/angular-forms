import { Inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const routeGuard: CanActivateFn = () => {
  let isLoggedIn = Inject(AuthService).isLoggedIn;
  if (confirm('Would you like to login?')) isLoggedIn = true;
  else isLoggedIn = false;
  return isLoggedIn;
};
