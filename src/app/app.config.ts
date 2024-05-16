import { S_GET_HISTORY_FINISHED_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/query/get-history-finished.query.handler';
import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './init/keycloak-init.factory';
import { GET_HISTORY_PROGRESS_PROVIDER_USECASE } from './messenger/aplication/usecases/handlers/query/get-history-progress.query.handler';
import { GET_HISTORY_PROVIDER_USECASE } from './messenger/aplication/usecases/handlers/query/get-history.query.handler';
import { START_ALL_QUEUE_PROVIDER_USECASE } from './messenger/aplication/usecases/handlers/comand/start-all.comand.handler';
import { STOP_CONSUMER_QUEUE_PROVIDER_USECASE } from './messenger/aplication/usecases/handlers/comand/stop-consumer.comand.handler';
import { GET_STATUS_PROVIDER_USECASE } from './messenger/aplication/usecases/handlers/query/get-status.query.handler';
import { GET_STATUS_QUEUE_PROVIDER_USECASE } from './messenger/aplication/usecases/handlers/query/get-status-queue.query.handler';
import { GET_HISTORY_FINISHED_PROVIDER } from './messenger/infrastructure/adapters/get-history-finished.adapter';
import { GET_HISTORY_PROVIDER } from './messenger/infrastructure/adapters/get-history.adapter';
import { GET_HISTORY_PROGRESS_PROVIDER } from './messenger/infrastructure/adapters/get-history-progress.adapter';
import { GET_STATUS_QUEUE_PROVIDER } from './messenger/infrastructure/adapters/get-status-queue.adapter';
import { GET_STATUS_PROVIDER } from './messenger/infrastructure/adapters/get-status.adapter';
import { START_ALL_QUEUE_PROVIDER } from './messenger/infrastructure/adapters/post-start-all-queue.adapter';
import { STOP_CONSUMER_QUEUE_PROVIDER } from './messenger/infrastructure/adapters/post-stop-consumer-queue.adapter';
import { S_ENABLE_MODULE_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/comand/enable.comand.handler';
import { S_GET_HISTORY_PROGRESS_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/query/get-history-progress.query.handler';
import { S_GET_HISTORY_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/query/get-history.query.handler';
import { S_GET_STATUS_JOB_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/query/get-status-job.query.handler';
import { S_GET_STATUS_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/query/get-status.query.handler';
import { S_REMOVE_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/comand/remove.comand.handler';
import { S_START_ALL_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/comand/start-all.comand.handler';
import { S_START_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/comand/start.comand.handler';
import { S_STOP_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/comand/stop.comand.handler';
import { S_REMOVE_STATUS_API_PROVIDER } from './scheduler/infrastructure/adapters/remove-status.adapter';
import { S_START_ALL_STATUS_API_PROVIDER } from './scheduler/infrastructure/adapters/start-all-status.adapter';
import { S_START_STATUS_API_PROVIDER } from './scheduler/infrastructure/adapters/start-status.adapter';
import { S_STOP_STATUS_API_PROVIDER } from './scheduler/infrastructure/adapters/stop-status.adapter';
import { HISTORY_JOB_PROGRESS_API_PROVIDER } from './scheduler/infrastructure/adapters/get-id-history-job-progress.adapter';
import { HISTORY_JOB_FINISHED_API_PROVIDER } from './scheduler/infrastructure/adapters/get-id-history-job-finished.adapter';
import { GET_STATUS_API_PROVIDER } from './scheduler/infrastructure/adapters/get-status.adapter';
import { GET_STATUS_JOB_API_PROVIDER } from './scheduler/infrastructure/adapters/get-status-job.adapter';
import { HISTORY_API_PROVIDER } from './scheduler/infrastructure/adapters/get-id-history.adapter';
import { GET_HISTORY_FINISHED_PROVIDER_USECASE } from './messenger/aplication/usecases/handlers/query/get-history-finished.query.handler';
import { S_DISABLE_MODULE_PROVIDER_USECASE } from './scheduler/application/usecases/handlers/comand/disable.comand.handler';
import { DISABLE_MODULE_PROVIDER } from './scheduler/infrastructure/adapters/disable-status.adapter';
import { ENABLE_MODULE_PROVIDER } from './scheduler/infrastructure/adapters/enable-status.adapter';

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
    DISABLE_MODULE_PROVIDER,
    ENABLE_MODULE_PROVIDER,
    HISTORY_API_PROVIDER,
    S_REMOVE_STATUS_API_PROVIDER,
    S_START_ALL_STATUS_API_PROVIDER,
    S_START_STATUS_API_PROVIDER,
    S_STOP_STATUS_API_PROVIDER,
    S_REMOVE_STATUS_API_PROVIDER,
    S_START_STATUS_API_PROVIDER,
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
    GET_HISTORY_PROGRESS_PROVIDER_USECASE,
    GET_HISTORY_FINISHED_PROVIDER_USECASE,
    GET_HISTORY_PROVIDER_USECASE,
    START_ALL_QUEUE_PROVIDER_USECASE,
    STOP_CONSUMER_QUEUE_PROVIDER_USECASE,
    GET_STATUS_PROVIDER_USECASE,
    GET_STATUS_QUEUE_PROVIDER_USECASE,
    S_DISABLE_MODULE_PROVIDER_USECASE,
    S_ENABLE_MODULE_PROVIDER_USECASE,
    S_GET_HISTORY_FINISHED_PROVIDER_USECASE,
    S_GET_HISTORY_PROGRESS_PROVIDER_USECASE,
    S_GET_HISTORY_PROVIDER_USECASE,
    S_GET_STATUS_JOB_PROVIDER_USECASE,
    S_GET_STATUS_PROVIDER_USECASE,
    S_REMOVE_PROVIDER_USECASE,
    S_START_ALL_PROVIDER_USECASE,
    S_START_PROVIDER_USECASE,
    S_STOP_PROVIDER_USECASE,
  ],
};
