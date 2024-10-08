import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { authGuard } from './auth.guard';
import { KeycloakService } from 'keycloak-angular';

describe('authGuardGuard', () => {
  let keycloak: KeycloakService;

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        KeycloakService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    keycloak = TestBed.inject(KeycloakService);
    spyOn(keycloak, 'login').and.callThrough;
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should allow access to routes when user is authenticated', fakeAsync(async () => {
    // ARRANGE
    spyOn(keycloak, 'isLoggedIn').and.returnValue(await Promise.resolve(true));
    tick();

    // ACT
    const expected = await TestBed.runInInjectionContext(() =>
      authGuard(new ActivatedRouteSnapshot(), {} as RouterStateSnapshot)
    );

    // ASSERT
    expect(expected).toBeTrue();
  }));

  it('should deny access and redirect to login route when user is not authenticated', fakeAsync(async () => {
    // ARRANGE
    spyOn(keycloak, 'isLoggedIn').and.returnValue(await Promise.resolve(false));
    tick();

    // ACT
    const expected = await TestBed.runInInjectionContext(() =>
      authGuard(new ActivatedRouteSnapshot(), {} as RouterStateSnapshot)
    );

    // ASSERT
    expect(expected).toBeFalse();
    expect(keycloak.login).toHaveBeenCalled();
  }));
});
