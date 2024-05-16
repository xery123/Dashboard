import { Observable } from 'rxjs';

import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { historyJobProgressPort } from '../../../ports/history-job-progress.port';
import { HistoryJobProgress } from '../../../../domain/historyJobProgress';
import { getHistoryProgressUsecase } from '../../get-history-progress.usecase';
import { HISTORY_JOB_PROGRESS_SERVICE } from '../../../../infrastructure/adapters/get-id-history-job-progress.adapter';

@Injectable({
  providedIn: 'root',
})
export class GetHistoryProgressQuery implements getHistoryProgressUsecase {
  constructor(
    @Inject(HISTORY_JOB_PROGRESS_SERVICE)
    private historyJobProgressPort: historyJobProgressPort
  ) {}

  handle(id: string): Observable<HistoryJobProgress> {
    return this.historyJobProgressPort.execute(id);
  }
}
export const GET_HISTORY_PROGRESS_USECASE =
  new InjectionToken<getHistoryProgressUsecase>('getHistoryProgressUsecase');

export const S_GET_HISTORY_PROGRESS_PROVIDER_USECASE: Provider = {
  provide: GET_HISTORY_PROGRESS_USECASE,
  useClass: GetHistoryProgressQuery,
};
