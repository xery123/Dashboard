import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { stopConsumerQueuePort } from '../../../ports/post-stop-consumer-queue.port';
import { stopUsecase } from '../../stop-consumer.usecase';
import { STOP_CONSUMER_QUEUE } from '../../../../infrastructure/adapters/post-stop-consumer-queue.adapter';

@Injectable({
  providedIn: 'root',
})
export class StopQuery implements stopUsecase {
  constructor(
    @Inject(STOP_CONSUMER_QUEUE)
    private stopConsumerQueuePort: stopConsumerQueuePort
  ) {}

  handle(id: string): Observable<any> {
    return this.stopConsumerQueuePort.execute(id);
  }
}
export const STOP_CONSUMER_QUEUE_USECASE = new InjectionToken<stopUsecase>(
  'startAllUsecase'
);

export const STOP_CONSUMER_QUEUE_PROVIDER_USECASE: Provider = {
  provide: STOP_CONSUMER_QUEUE_USECASE,
  useClass: StopQuery,
};
