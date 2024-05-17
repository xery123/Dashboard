import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { getHistoryProgressPort } from '../../../ports/get-history-progress.port';
import { getHistoryProgressUsecase } from '../../get-history-progress.usecase';
import { GET_HISTORY_PROGRESS } from '../../../../infrastructure/adapters/get-history-progress.adapter';
import { HistoryAggregate } from '../../../../domain/aggregates/history';

@Injectable({
  providedIn: 'root',
})
export class GetHistoryProgressQuery implements getHistoryProgressUsecase {
  constructor(
    @Inject(GET_HISTORY_PROGRESS)
    private getHistoryProgressPort: getHistoryProgressPort
  ) {}

  handle(id: string): Observable<HistoryAggregate> {
    return this.getHistoryProgressPort.execute(id);
  }
}

export const GET_HISTORY_PROGRESS_USECASE =
  new InjectionToken<getHistoryProgressUsecase>('getHistoryProgressUsecase');

export const GET_HISTORY_PROGRESS_PROVIDER_USECASE: Provider = {
  provide: GET_HISTORY_PROGRESS_USECASE,
  useClass: GetHistoryProgressQuery,
};
