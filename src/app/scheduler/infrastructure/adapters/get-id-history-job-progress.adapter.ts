import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryJobProgress } from '../../domain/historyJobProgress';
import { EnvironmentService } from '../../../select environment/select-environment.service';
import { ENDPOINTS } from '../end points/end-points';
import { historyJobProgressPort } from '../../application/ports/history-job-progress.port';
@Injectable({
  providedIn: 'root',
})
export class GetHistoryProgressAdapter implements historyJobProgressPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(id: string): Observable<HistoryJobProgress> {
    const apiUrl = ENDPOINTS.HISTORY_PROGRESS(this.EnvironmentService);
    const filter = ENDPOINTS.HISTORY_PROGRESS_FILTER(0, 20);
    const url = `${apiUrl}${id}${filter}`;
    console.log('get history');
    return this.http.get<HistoryJobProgress>(url);
  }
}
export const HISTORY_JOB_PROGRESS_SERVICE =
  new InjectionToken<historyJobProgressPort>('historyJobProgressPort');

export const HISTORY_JOB_PROGRESS_API_PROVIDER: Provider = {
  provide: HISTORY_JOB_PROGRESS_SERVICE,
  useClass: GetHistoryProgressAdapter,
};
