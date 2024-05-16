import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../end points/end-points';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { startStatusPort } from '../../application/ports/startPost-status.port';
@Injectable({
  providedIn: 'root',
})
export class StartStatusAdapter implements startStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}
  execute(jobId: string): Observable<any> {
    const apiUrl = ENDPOINTS.START(this.EnvironmentService);
    const url = `${apiUrl}${jobId}`;
    console.log('get start');
    return this.http.get(url);
  }
}
export const START_STATUS_SERVICE = new InjectionToken<startStatusPort>(
  'startStatusPort'
);

export const S_START_STATUS_API_PROVIDER: Provider = {
  provide: START_STATUS_SERVICE,
  useClass: StartStatusAdapter,
};
