import { InjectionToken, Provider } from '@angular/core';
import { getHistoryFinishedPort } from '../../../aplication/ports/get-history.port/get-history-finished.port';
import { getHistoryFinishedAdapter } from '../../adapters/get-history-finished.adapter/get-history-finished.adapter';

export const HTTP_GET_HISTORY_FINISHED =
  new InjectionToken<getHistoryFinishedPort>('getHistoryFinishedPort');

export const GET_HISTORY_FINISHED_PROVIDER: Provider = {
  provide: HTTP_GET_HISTORY_FINISHED,
  useClass: getHistoryFinishedAdapter,
};
