import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Provider } from '@angular/core';
import { Status } from '../../domain/status';

import { ENDPOINTS } from '../end points/end-points';
import { Observable } from 'rxjs';
import { getStatusPort } from '../../aplication/ports/get-status.port';
import { EnvironmentService } from '../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class getStatusAdapter implements getStatusPort {
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
export const GET_STATUS = new InjectionToken<getStatusPort>('getStatusPort');

export const GET_STATUS_PROVIDER: Provider = {
  provide: GET_STATUS,
  useClass: getStatusAdapter,
};
