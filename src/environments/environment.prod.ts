interface ProcessEnv {
  API_URL_ENVIRONMENT: string;
  URL_KEYCLOACK: string;
  REALM_KEYCLOACK: string;
  CLIENT_ID_KEYCLOACK: string;
}

declare const process: { env: ProcessEnv };

interface EnvironmentUrls {
  [key: string]: string[];
}

export interface API_URL_ENVIRONMENT extends EnvironmentUrls {}

export const environment = {
  production: true,
  API_URL_ENVIRONMENT: parseEnvironmentUrls(
    process.env['API_URL_ENVIRONMENT'] || ''
  ),
  URL_KEYCLOACK: process.env['URL_KEYCLOACK'] || '',
  REALM_KEYCLOACK: process.env['REALM_KEYCLOACK'] || '',
  CLIENT_ID_KEYCLOACK: process.env['CLIENT_ID_KEYCLOACK'] || '',
  configFile: 'assets/config/config.prod.json',
};

function parseEnvironmentUrls(envStr: string): API_URL_ENVIRONMENT {
  const result: API_URL_ENVIRONMENT = {};

  if (envStr) {
    const parts = envStr.split(';');
    for (const part of parts) {
      const [key, value] = part.split('=');
      if (key && value) {
        result[key] = value.split(',');
      }
    }
  }

  return result;
}
