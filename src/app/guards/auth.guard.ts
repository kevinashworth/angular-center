import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('authGuard', authService.isAuthenticated());
  console.log('authGuard', route, state);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/signin']);
    return false;
  }
};
