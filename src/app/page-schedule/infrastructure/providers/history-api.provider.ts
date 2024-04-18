import { InjectionToken, Provider } from '@angular/core';
import { IHistoryPort } from '../../application/ports/history-port/history-port';
import { getidHistoryAdapter } from '../job-history.adapter/getId-history.adapter';


export const HTTP_HISTORY_SERVICE = new InjectionToken<IHistoryPort>('IHistoryPort');

export const HISTORY_API_PROVIDER: Provider = { provide: HTTP_HISTORY_SERVICE, useClass: getidHistoryAdapter };
