import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { ENDPOINTS } from '../end points/end-points';
import { getStatusPort } from '../../application/ports/get-status.port';
import { Status } from '../../domain/aggregates/status';
@Injectable({
  providedIn: 'root',
})
export class GetStatusAdapter implements getStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(): Observable<Status> {
    const apiUrl = ENDPOINTS.STATUS(this.EnvironmentService);
    console.log('get status');
    return this.http.get<Status>(apiUrl);
  }
}
export const GET_STATUS_SERVICE = new InjectionToken<getStatusPort>(
  'getStatusPort'
);

export const GET_STATUS_API_PROVIDER: Provider = {
  provide: GET_STATUS_SERVICE,
  useClass: GetStatusAdapter,
};
