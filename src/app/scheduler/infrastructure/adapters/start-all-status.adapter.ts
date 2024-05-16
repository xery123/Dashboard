import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../end points/end-points';
import { EnvironmentService } from '../../../select environment/select-environment.service';
import { startAllStatusPort } from '../../application/ports/startAllPost-status.port';

@Injectable({
  providedIn: 'root',
})
export class StartAllStatusAdapter implements startAllStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(): Observable<any> {
    const apiUrl = ENDPOINTS.START_ALL(this.EnvironmentService);
    console.log('get startAll');
    return this.http.get(apiUrl);
  }
}
export const START_ALL_STATUS_SERVICE = new InjectionToken<startAllStatusPort>(
  'IStartAllStatusPort'
);

export const S_START_ALL_STATUS_API_PROVIDER: Provider = {
  provide: START_ALL_STATUS_SERVICE,
  useClass: StartAllStatusAdapter,
};
