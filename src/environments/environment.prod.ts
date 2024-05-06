interface ProcessEnv {
  API_URL_ENVIRONMENT: string;
}

declare const process: {
  env: ProcessEnv;
};

export const environment = {
  production: true,
  API_URL_ENVIRONMENT: process.env['API_URL_ENVIRONMENT'] || '',
  configFile: 'assets/config/config.prod.json',
};
