import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../end points/end-points';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { getHistoryFinishedPort } from '../../aplication/ports/get-history-finished.port';
import { HistoryAggregate } from '../../domain/aggregates/history';

@Injectable({
  providedIn: 'root',
})
export class getHistoryFinishedAdapter implements getHistoryFinishedPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(id: string): Observable<HistoryAggregate> {
    const apiUrl = ENDPOINTS.HISTORY_FINISHED(this.EnvironmentService);
    const apiUrlFilter = ENDPOINTS.HISTORY_FINISHED_FILTER(0, 20);
    const url = `${apiUrl}${id}${apiUrlFilter}`;
    console.log('get historyFinished');
    return this.http.get<HistoryAggregate>(url);
  }
}
export const GET_HISTORY_FINISHED = new InjectionToken<getHistoryFinishedPort>(
  'getHistoryFinishedPort'
);

export const GET_HISTORY_FINISHED_PROVIDER: Provider = {
  provide: GET_HISTORY_FINISHED,
  useClass: getHistoryFinishedAdapter,
};
