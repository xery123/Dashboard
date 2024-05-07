import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment.development';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: `${environment.URL_KEYCLOACK}`,
        realm: `${environment.REALM_KEYCLOACK}`,
        clientId: `${environment.CLIENT_ID_KEYCLOACK}`,
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls: ['/assets'],
      initOptions: {
        adapter: 'default',
        onLoad: 'check-sso',
        checkLoginIframe: false,
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}
