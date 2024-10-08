import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');
  const router = inject(Router);

  if (token == undefined || token == null) {
    return router.createUrlTree(['/home'])
  }
  return true
};