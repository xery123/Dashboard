import { InjectionToken, Provider } from '@angular/core';
import { getHistoryProgressPort } from '../../../aplication/ports/get-history.port/get-history-progress.port';
import { getHistoryProgressAdapter } from '../../adapters/get-history-progress.adapter/get-history-progress.adapter';

export const HTTP_GET_HISTORY_PROGRESS =
  new InjectionToken<getHistoryProgressPort>('getHistoryProgressPort');

export const GET_HISTORY_PROGRESS_PROVIDER: Provider = {
  provide: HTTP_GET_HISTORY_PROGRESS,
  useClass: getHistoryProgressAdapter,
};
