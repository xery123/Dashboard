import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../end points/end-points';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { stopStatusPort } from '../../application/ports/stopPost-status.port';
@Injectable({
  providedIn: 'root',
})
export class StopStatusAdapter implements stopStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}
  execute(jobId: string): Observable<any> {
    const apiUrl = ENDPOINTS.STOP(this.EnvironmentService);
    const url = `${apiUrl}${jobId}`;
    console.log('delete stop');
    return this.http.delete(url);
  }
}
export const STOP_STATUS_SERVICE = new InjectionToken<stopStatusPort>(
  'stopStatusPort'
);

export const S_STOP_STATUS_API_PROVIDER: Provider = {
  provide: STOP_STATUS_SERVICE,
  useClass: StopStatusAdapter,
};
