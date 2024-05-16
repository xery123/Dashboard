import { Observable } from 'rxjs';

import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { historyJobFinishedPort } from '../../../ports/history-job-finished.port';
import { HistoryJobFinished } from '../../../../domain/historyJobFinished';
import { getHistoryFinishedUsecase } from '../../get-history-finished.usecase';
import { HISTORY_JOB_FINISHED_SERVICE } from '../../../../infrastructure/adapters/get-id-history-job-finished.adapter';

@Injectable({
  providedIn: 'root',
})
export class GetHistoryFinishedQuery implements getHistoryFinishedUsecase {
  constructor(
    @Inject(HISTORY_JOB_FINISHED_SERVICE)
    private historyJobFinishedPort: historyJobFinishedPort
  ) {}

  handle(id: string): Observable<HistoryJobFinished> {
    return this.historyJobFinishedPort.execute(id);
  }
}
export const GET_HISTORY_FINISHED_USECASE =
  new InjectionToken<getHistoryFinishedUsecase>('getHistoryFinishedUsecase');

export const S_GET_HISTORY_FINISHED_PROVIDER_USECASE: Provider = {
  provide: GET_HISTORY_FINISHED_USECASE,
  useClass: GetHistoryFinishedQuery,
};
