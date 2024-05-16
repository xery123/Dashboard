import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../end points/end-points';
import { EnvironmentService } from '../../../select environment/select-environment.service';
import { disableModulePort } from '../../application/ports/disablePost-status.port';
@Injectable({
  providedIn: 'root',
})
export class DisableStatusAdapter implements disableModulePort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(jobId: string): Observable<any> {
    const apiUrl = ENDPOINTS.DISABLE(this.EnvironmentService);
    const url = `${apiUrl}${jobId}`;
    console.log('get disable');
    return this.http.get(url);
  }
}
export const DISABLE_MODULE_SERVICE = new InjectionToken<disableModulePort>(
  'disableModulePort'
);

export const DISABLE_MODULE_PROVIDER: Provider = {
  provide: DISABLE_MODULE_SERVICE,
  useClass: DisableStatusAdapter,
};
