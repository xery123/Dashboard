import { InjectionToken, Provider } from '@angular/core';
import { stopConsumerQueuePort } from '../../../aplication/ports/startAll-stop.port/post-stopConsumer-queue.port';
import { postStopConsumerQueueAdapter } from '../../adapters/post-stopConsumer-queue.adapter/post-stopConsumer-queue.adapter';

export const HTTP_STOP_CONSUMER_QUEUE =
  new InjectionToken<stopConsumerQueuePort>('stopConsumerQueuePort');

export const STOP_CONSUMER_QUEUE_PROVIDER: Provider = {
  provide: HTTP_STOP_CONSUMER_QUEUE,
  useClass: postStopConsumerQueueAdapter,
};
