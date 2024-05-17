import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { GET_HISTORY_FINISHED_PROVIDER } from '../messenger/infrastructure/adapters/get-history-finished.adapter';
import { GET_HISTORY_PROGRESS_PROVIDER } from '../messenger/infrastructure/adapters/get-history-progress.adapter';
import { GET_HISTORY_PROVIDER } from '../messenger/infrastructure/adapters/get-history.adapter';
import { GET_STATUS_QUEUE_PROVIDER } from '../messenger/infrastructure/adapters/get-status-queue.adapter';
import { GET_STATUS_PROVIDER } from '../messenger/infrastructure/adapters/get-status.adapter';
import { START_ALL_QUEUE_PROVIDER } from '../messenger/infrastructure/adapters/post-start-all-queue.adapter';
import { STOP_CONSUMER_QUEUE_PROVIDER } from '../messenger/infrastructure/adapters/post-stop-consumer-queue.adapter';
import { GET_HISTORY_PROGRESS_PROVIDER_USECASE } from '../messenger/aplication/usecases/handlers/query/get-history-progress.query.handler';
import { GET_HISTORY_FINISHED_PROVIDER_USECASE } from '../messenger/aplication/usecases/handlers/query/get-history-finished.query.handler';
import { GET_HISTORY_PROVIDER_USECASE } from '../messenger/aplication/usecases/handlers/query/get-history.query.handler';
import { START_ALL_QUEUE_PROVIDER_USECASE } from '../messenger/aplication/usecases/handlers/comand/start-all.comand.handler';
import { STOP_CONSUMER_QUEUE_PROVIDER_USECASE } from '../messenger/aplication/usecases/handlers/comand/stop-consumer.comand.handler';
import { GET_STATUS_PROVIDER_USECASE } from '../messenger/aplication/usecases/handlers/query/get-status.query.handler';
import { GET_STATUS_QUEUE_PROVIDER_USECASE } from '../messenger/aplication/usecases/handlers/query/get-status-queue.query.handler';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from '../init/keycloak-init.factory';

export const APP_MESSENGER_PROVIDER = [
  provideRouter(routes),

  provideHttpClient(withInterceptorsFromDi()),
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
  GET_HISTORY_FINISHED_PROVIDER,
  GET_HISTORY_PROGRESS_PROVIDER,
  GET_HISTORY_PROVIDER,
  GET_STATUS_QUEUE_PROVIDER,
  GET_STATUS_PROVIDER,
  START_ALL_QUEUE_PROVIDER,
  STOP_CONSUMER_QUEUE_PROVIDER,
  GET_HISTORY_PROGRESS_PROVIDER_USECASE,
  GET_HISTORY_FINISHED_PROVIDER_USECASE,
  GET_HISTORY_PROVIDER_USECASE,
  START_ALL_QUEUE_PROVIDER_USECASE,
  STOP_CONSUMER_QUEUE_PROVIDER_USECASE,
  GET_STATUS_PROVIDER_USECASE,
  GET_STATUS_QUEUE_PROVIDER_USECASE,
];
