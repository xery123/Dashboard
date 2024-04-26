import { InjectionToken, Provider } from '@angular/core';
import { IHistoryJobProgressPort } from '../../application/ports/history-port/history-job-progress.port';
import { getidHistoryProgressAdapter } from '../job-history.adapter/getId-history-job-progress.adapter';

export const HTTP_HISTORY_JOB_PROGRESS_SERVICE =
  new InjectionToken<IHistoryJobProgressPort>('IHistoryJobProgressPort');

export const HISTORY_JOB_PROGRESS_API_PROVIDER: Provider = {
  provide: HTTP_HISTORY_JOB_PROGRESS_SERVICE,
  useClass: getidHistoryProgressAdapter,
};
