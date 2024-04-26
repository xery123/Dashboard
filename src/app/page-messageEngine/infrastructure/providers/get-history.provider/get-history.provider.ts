import { InjectionToken, Provider } from '@angular/core';
import { getHistoryPort } from '../../../aplication/ports/get-history.port/get-history.port';
import { getHistoryAdapter } from '../../adapters/get-history.adapter/get-history.adapter';

export const HTTP_GET_HISTORY = new InjectionToken<getHistoryPort>(
  'getHistoryPort'
);

export const GET_HISTORY_PROVIDER: Provider = {
  provide: HTTP_GET_HISTORY,
  useClass: getHistoryAdapter,
};
