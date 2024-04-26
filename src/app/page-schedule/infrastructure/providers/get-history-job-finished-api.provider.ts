import { InjectionToken, Provider } from '@angular/core';
import { IHistoryJobFinishedPort } from '../../application/ports/history-port/history-job-finished.port';
import { getidHistoryFinishedAdapter } from '../job-history.adapter/getId-history-job-finished.adapter';

export const HTTP_HISTORY_JOB_FINISHED_SERVICE =
  new InjectionToken<IHistoryJobFinishedPort>('IHistoryJobFinishedPort');

export const HISTORY_JOB_FINISHED_API_PROVIDER: Provider = {
  provide: HTTP_HISTORY_JOB_FINISHED_SERVICE,
  useClass: getidHistoryFinishedAdapter,
};
