import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { ENDPOINTS } from '../end points/end-points';
import { getStatusJobPort } from '../../application/ports/get-status-job.port';
import { StatusJob } from '../../domain/aggregates/status-job';
@Injectable({
  providedIn: 'root',
})
export class GetStatusJobAdapter implements getStatusJobPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(id: string): Observable<StatusJob> {
    const apiUrl = ENDPOINTS.STATUS_JOB(this.EnvironmentService);
    const url = `${apiUrl}${id}`;
    console.log('get statusJob');
    return this.http.get<StatusJob>(url);
  }
}
export const GET_STATUS_JOB_SERVICE = new InjectionToken<getStatusJobPort>(
  'getStatusJobPort'
);

export const GET_STATUS_JOB_API_PROVIDER: Provider = {
  provide: GET_STATUS_JOB_SERVICE,
  useClass: GetStatusJobAdapter,
};
