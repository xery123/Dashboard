import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { GET_STATUS_JOB_API_PROVIDER } from './page-schedule/infrastructure/providers/get-status-job-api.provider';
import { HISTORY_API_PROVIDER } from './page-schedule/infrastructure/providers/history-api.provider';
import { POST_REMOVE_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postRemove-status-api.provider';
import { POST_STARTALL_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postAllStart-status-api.provider';
import { POST_START_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postStart-status-api.provider';
import { POST_STOP_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/postStop-status-api.provider';
import { GET_STATUS_API_PROVIDER } from './page-schedule/infrastructure/providers/get-status-api.provider';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(),GET_STATUS_JOB_API_PROVIDER,HISTORY_API_PROVIDER,
    POST_REMOVE_STATUS_API_PROVIDER,POST_STARTALL_STATUS_API_PROVIDER,POST_START_STATUS_API_PROVIDER,POST_STOP_STATUS_API_PROVIDER,
GET_STATUS_API_PROVIDER
  ]
};
