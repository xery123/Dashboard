import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Provider } from '@angular/core';

import { History } from '../../domain/history';
import { Observable } from 'rxjs';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { ENDPOINTS } from '../end points/end-points';
import { historyPort } from '../../application/ports/history.port';
@Injectable({
  providedIn: 'root',
})
export class GetHistoryAdapter implements historyPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(id: string): Observable<History> {
    const apiUrl = ENDPOINTS.HISTORY(this.EnvironmentService);
    const filter = ENDPOINTS.HISTORY_FILTER(0, 100);
    const url = `${apiUrl}${id}${filter}`;
    console.log('get history');
    return this.http.get<History>(url);
  }
}
export const HISTORY_SERVICE = new InjectionToken<historyPort>('historyPort');

export const HISTORY_API_PROVIDER: Provider = {
  provide: HISTORY_SERVICE,
  useClass: GetHistoryAdapter,
};
