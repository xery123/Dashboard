import { ENDPOINTS } from '../end points/end-points';
import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { getHistoryProgressPort } from '../../aplication/ports/get-history-progress.port';
import { HistoryAggregate } from '../../domain/aggregates/history';

@Injectable({
  providedIn: 'root',
})
export class getHistoryProgressAdapter implements getHistoryProgressPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(id: string): Observable<HistoryAggregate> {
    const apiUrl = ENDPOINTS.HISTORY_PROGRESS(this.EnvironmentService);
    const apiUrlFilter = ENDPOINTS.HISTORY_PROGRESS_FILTER(0, 20);
    const url = `${apiUrl}${id}${apiUrlFilter}`;
    console.log('get historyProgress');
    return this.http.get<HistoryAggregate>(url);
  }
}
export const GET_HISTORY_PROGRESS = new InjectionToken<getHistoryProgressPort>(
  'getHistoryProgressPort'
);

export const GET_HISTORY_PROGRESS_PROVIDER: Provider = {
  provide: GET_HISTORY_PROGRESS,
  useClass: getHistoryProgressAdapter,
};
