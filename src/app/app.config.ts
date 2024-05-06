import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { GET_STATUS_JOB_API_PROVIDER } from './page-schedule/infrastructure/providers/get-status-job-api.provider';
import { HISTORY_API_PROVIDER } from './page-schedule/infrastructure/providers/get-history-api.provider';
import { POST_REMOVE_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postRemove-status-api.provider';
import { POST_STARTALL_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postAllStart-status-api.provider';
import { POST_START_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postStart-status-api.provider';
import { POST_STOP_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postStop-status-api.provider';

import { POST_ENABLE_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postEnable-status-api.provider';
import { POST_DISABLE_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postDisable-status-api.provider';
import { GET_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/get-status-api.provider';
import { GET_HISTORY_FINISHED_PROVIDER } from './page-messageEngine/infrastructure/providers/get-history.provider/get-history-finished.provider';
import { GET_HISTORY_PROGRESS_PROVIDER } from './page-messageEngine/infrastructure/providers/get-history.provider/get-history-progress.provider';
import { GET_HISTORY_PROVIDER } from './page-messageEngine/infrastructure/providers/get-history.provider/get-history.provider';
import { GET_STATUS_QUEUE_PROVIDER } from './page-messageEngine/infrastructure/providers/get-status.provider/get-status-queue.provider';
import { GET_STATUS_PROVIDER } from './page-messageEngine/infrastructure/providers/get-status.provider/get-status.provider';
import { START_ALL_QUEUE_PROVIDER } from './page-messageEngine/infrastructure/providers/startAll-stop.provider/post-startAll-queue.provider';
import { STOP_CONSUMER_QUEUE_PROVIDER } from './page-messageEngine/infrastructure/providers/startAll-stop.provider/post-stopConsumer-queue.provider';
import { HISTORY_JOB_FINISHED_API_PROVIDER } from './page-schedule/infrastructure/providers/get-history-job-finished-api.provider';
import { HISTORY_JOB_PROGRESS_API_PROVIDER } from './page-schedule/infrastructure/providers/get-history-job-progress-api.provider';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './init/keycloak-init.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    provideHttpClient(
      withInterceptorsFromDi() // tell httpClient to use interceptors from DI
    ),
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true,
    },
    GET_STATUS_JOB_API_PROVIDER,
    HISTORY_API_PROVIDER,
    POST_REMOVE_STATUS_API_PROVIDER,
    POST_STARTALL_STATUS_API_PROVIDER,
    POST_START_STATUS_API_PROVIDER,
    POST_STOP_STATUS_API_PROVIDER,
    POST_ENABLE_STATUS_API_PROVIDER,
    POST_DISABLE_STATUS_API_PROVIDER,
    GET_STATUS_API_PROVIDER,
    GET_HISTORY_FINISHED_PROVIDER,
    GET_HISTORY_PROGRESS_PROVIDER,
    GET_HISTORY_PROVIDER,
    GET_STATUS_QUEUE_PROVIDER,
    GET_STATUS_PROVIDER,
    START_ALL_QUEUE_PROVIDER,
    STOP_CONSUMER_QUEUE_PROVIDER,
    HISTORY_JOB_FINISHED_API_PROVIDER,
    HISTORY_JOB_PROGRESS_API_PROVIDER,
  ],
};
