import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { startAllUsecase } from '../../start-all.usecase';

import { startAllQueuePort } from '../../../ports/post-start-all-queue.port';
import { START_ALL_QUEUE } from '../../../../infrastructure/adapters/post-start-all-queue.adapter';

@Injectable({
  providedIn: 'root',
})
export class StartQuery implements startAllUsecase {
  constructor(
    @Inject(START_ALL_QUEUE)
    private startAllQueuePort: startAllQueuePort
  ) {}

  handle(): Observable<any> {
    return this.startAllQueuePort.execute();
  }
}
export const START_ALL_QUEUE_USECASE = new InjectionToken<startAllUsecase>(
  'startAllUsecase'
);

export const START_ALL_QUEUE_PROVIDER_USECASE: Provider = {
  provide: START_ALL_QUEUE_USECASE,
  useClass: StartQuery,
};
