import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryJobFinished } from '../../domain/historyJobFinished';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { ENDPOINTS } from '../end points/end-points';
import { historyJobFinishedPort } from '../../application/ports/history-job-finished.port';

@Injectable({
  providedIn: 'root',
})
export class GetHistoryFinishedAdapter implements historyJobFinishedPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(id: string): Observable<HistoryJobFinished> {
    const apiUrl = ENDPOINTS.HISTORY_FINISHED(this.EnvironmentService);
    const filter = ENDPOINTS.HISTORY_FINISHED_FILTER(0, 20);
    const url = `${apiUrl}${id}${filter}`;
    console.log('get history');
    return this.http.get<HistoryJobFinished>(url);
  }
}
export const HISTORY_JOB_FINISHED_SERVICE =
  new InjectionToken<historyJobFinishedPort>('historyJobFinishedPort');

export const HISTORY_JOB_FINISHED_API_PROVIDER: Provider = {
  provide: HISTORY_JOB_FINISHED_SERVICE,
  useClass: GetHistoryFinishedAdapter,
};
