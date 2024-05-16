import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HistoryQueue } from '../../domain/history-queue';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../end points/end-points';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { getHistoryPort } from '../../aplication/ports/get-history.port';

@Injectable({
  providedIn: 'root',
})
export class getHistoryAdapter implements getHistoryPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(id: string): Observable<HistoryQueue> {
    const apiUrl = ENDPOINTS.HISTORY(this.EnvironmentService);
    const apiUrlFilter = ENDPOINTS.HISTORY_FILTER(0, 100);
    const url = `${apiUrl}${id}${apiUrlFilter}`;
    console.log('get history');
    return this.http.get<HistoryQueue>(url);
  }
}
export const GET_HISTORY = new InjectionToken<getHistoryPort>('getHistoryPort');

export const GET_HISTORY_PROVIDER: Provider = {
  provide: GET_HISTORY,
  useClass: getHistoryAdapter,
};
