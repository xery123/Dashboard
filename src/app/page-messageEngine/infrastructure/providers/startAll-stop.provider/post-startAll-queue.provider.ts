import { InjectionToken, Provider } from '@angular/core';
import { startAllQueuePort } from '../../../aplication/ports/startAll-stop.port/post-startAll-queue.port';
import { postStartAllQueueAdapter } from '../../adapters/post-startAll-queue.adapter/post-startAll-queue.adapter';

export const HTTP_START_ALL_QUEUE = new InjectionToken<startAllQueuePort>(
  'startAllQueuePort'
);

export const START_ALL_QUEUE_PROVIDER: Provider = {
  provide: HTTP_START_ALL_QUEUE,
  useClass: postStartAllQueueAdapter,
};
