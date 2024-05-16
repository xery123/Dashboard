import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../end points/end-points';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { removeStatusPort } from '../../application/ports/removePost-status.port';
@Injectable({
  providedIn: 'root',
})
export class RemoveStatusAdapter implements removeStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}
  execute(jobId: string): Observable<any> {
    const apiUrl = ENDPOINTS.REMOVE(this.EnvironmentService);
    const url = `${apiUrl}${jobId}`;
    console.log('get remove');
    return this.http.get(url);
  }
}
export const REMOVE_STATUS_SERVICE = new InjectionToken<removeStatusPort>(
  'removeStatusPort'
);

export const S_REMOVE_STATUS_API_PROVIDER: Provider = {
  provide: REMOVE_STATUS_SERVICE,
  useClass: RemoveStatusAdapter,
};
