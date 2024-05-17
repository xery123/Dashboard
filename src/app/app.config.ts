import { importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { APP_SCHEDULER_PROVIDER } from './scheduler module/module.provider';
import { APP_MESSENGER_PROVIDER } from './messenger module/provider';

export const appConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideRouter(routes),
    APP_MESSENGER_PROVIDER,
    APP_SCHEDULER_PROVIDER,
  ],
};
