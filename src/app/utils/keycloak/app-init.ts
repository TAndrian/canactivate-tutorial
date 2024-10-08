import { KeycloakService } from 'keycloak-angular';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KeycloakInitializer {
  constructor(private keycloak: KeycloakService) {}

  init(): Promise<any> {
    return this.keycloak.init({
      config: {
        url: environment.keycloakConfig.issuer,
        realm: environment.keycloakConfig.realm,
        clientId: environment.keycloakConfig.clientId,
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        flow: 'standard',
      },
    });
  }
}
