import { InjectionToken, Provider } from '@angular/core';
import { getStatusQueuePort } from '../../../aplication/ports/get-status.port/get-status-queue.port';
import { getStatusQueueAdapter } from '../../adapters/get-status-queue.adapter/get-status-queue.adapter';

export const HTTP_GET_STATUS_QUEUE = new InjectionToken<getStatusQueuePort>(
  'getStatusQueuePort'
);

export const GET_STATUS_QUEUE_PROVIDER: Provider = {
  provide: HTTP_GET_STATUS_QUEUE,
  useClass: getStatusQueueAdapter,
};
