import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Promise<boolean> => {
  const keycloak = inject(KeycloakService);

  return new Promise(async (resolve, reject) => {
    if (!(await keycloak.isLoggedIn())) {
      await keycloak.login();
      return resolve(false);
    }
    resolve(true);
  });
};
