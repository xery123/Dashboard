interface ProcessEnv {
  API_URL_ENVIRONMENT: string;
  URL_KEYCLOACK: string;
  REALM_KEYCLOACK: string;
  CLIENT_ID_KEYCLOACK: string;
}

declare const process: {
  env: ProcessEnv;
};

export const environment = {
  production: true,
  API_URL_ENVIRONMENT: process.env['API_URL_ENVIRONMENT'] || '',
  URL_KEYCLOACK: process.env['URL_KEYCLOACK'] || '',
  REALM_KEYCLOACK: process.env['REALM_KEYCLOACK'] || '',
  CLIENT_ID_KEYCLOACK: process.env['CLIENT_ID_KEYCLOACK'] || '',
  configFile: 'assets/config/config.prod.json',
};
