import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { HistoryQueue } from '../../../../domain/history-queue';
import { getHistoryPort } from '../../../ports/get-history.port';
import { getHistoryUsecase } from '../../get-history.usecase';
import { GET_HISTORY } from '../../../../infrastructure/adapters/get-history.adapter';

@Injectable({
  providedIn: 'root',
})
export class GetHistoryQuery implements getHistoryUsecase {
  constructor(
    @Inject(GET_HISTORY)
    private getHistoryPort: getHistoryPort
  ) {}

  handle(id: string): Observable<HistoryQueue> {
    return this.getHistoryPort.execute(id);
  }
}
export const GET_HISTORY_USECASE = new InjectionToken<getHistoryUsecase>(
  'getHistoryUsecase'
);

export const GET_HISTORY_PROVIDER_USECASE: Provider = {
  provide: GET_HISTORY_USECASE,
  useClass: GetHistoryQuery,
};
