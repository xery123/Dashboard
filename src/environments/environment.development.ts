export const environment = {
  production: false,
  API_URL_ENVIRONMENT: parseEnvironmentUrls(
    'test=https://testactors2.limber.io,https://test2.limber.io,https://testactors4.limber.io;app=https://app2.limber.io,https://app2.limber.io,https://app4.limber.io'
  ),
  URL_KEYCLOACK: 'https://devauth.limber.io/auth',
  REALM_KEYCLOACK: 'limber-main-test',
  CLIENT_ID_KEYCLOACK: 'limber_angular_ui',
};
interface EnvironmentUrls {
  [key: string]: string[];
}
export interface API_URL_ENVIRONMENT extends EnvironmentUrls {}
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
