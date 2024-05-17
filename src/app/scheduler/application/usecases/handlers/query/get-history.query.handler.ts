import { Observable } from 'rxjs';

import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { historyPort } from '../../../ports/history.port';
import { getHistoryUsecase } from '../../get-history.usecase';
import { HISTORY_SERVICE } from '../../../../infrastructure/adapters/get-id-history.adapter';
import { HistoryAggregate } from '../../../../domain/aggregates/history';

@Injectable({
  providedIn: 'root',
})
export class GetHistoryQuery implements getHistoryUsecase {
  constructor(@Inject(HISTORY_SERVICE) private historyPort: historyPort) {}

  handle(id: string): Observable<HistoryAggregate> {
    return this.historyPort.execute(id);
  }
}
export const GET_HISTORY_USECASE = new InjectionToken<getHistoryUsecase>(
  'getHistoryUsecase'
);

export const S_GET_HISTORY_PROVIDER_USECASE: Provider = {
  provide: GET_HISTORY_USECASE,
  useClass: GetHistoryQuery,
};
