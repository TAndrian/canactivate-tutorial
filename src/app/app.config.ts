import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakInitializer } from './utils/keycloak/app-init';

function initializeKeycloak(keycloak: KeycloakInitializer) {
  return () => keycloak.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    KeycloakService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakInitializer],
    },
  ],
};
