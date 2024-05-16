import { Observable } from 'rxjs';
import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { getStatusQueuePort } from '../../../ports/get-status-queue.port';

import { StatusQueue } from '../../../../domain/status-queue';
import { getStatusQueueUsecase } from '../../get-status-queue.query.handler';
import { GET_STATUS_QUEUE } from '../../../../infrastructure/adapters/get-status-queue.adapter';

@Injectable({
  providedIn: 'root',
})
export class GetStatusQueueQuery implements getStatusQueueUsecase {
  constructor(
    @Inject(GET_STATUS_QUEUE)
    private getStatusQueuePort: getStatusQueuePort
  ) {}

  handle(id: string): Observable<StatusQueue> {
    return this.getStatusQueuePort.execute(id);
  }
}
export const GET_STATUS_QUEUE_USECASE =
  new InjectionToken<getStatusQueueUsecase>('getStatusQueueUsecase');

export const GET_STATUS_QUEUE_PROVIDER_USECASE: Provider = {
  provide: GET_STATUS_QUEUE_USECASE,
  useClass: GetStatusQueueQuery,
};
