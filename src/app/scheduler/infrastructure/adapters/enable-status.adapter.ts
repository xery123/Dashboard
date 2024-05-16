import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../end points/end-points';
import { EnvironmentService } from '../../../select environment/select-environment.service';
import { enableModulePort } from '../../application/ports/enablePost-status.port';
@Injectable({
  providedIn: 'root',
})
export class EnableModuleAdapter implements enableModulePort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(jobId: string): Observable<any> {
    const apiUrl = ENDPOINTS.ENABLE(this.EnvironmentService);
    const url = `${apiUrl}${jobId}`;
    console.log('get enable');
    return this.http.get(url);
  }
}
export const ENABLE_MODULE_SERVICE = new InjectionToken<enableModulePort>(
  'enableModulePort'
);

export const ENABLE_MODULE_PROVIDER: Provider = {
  provide: ENABLE_MODULE_SERVICE,
  useClass: EnableModuleAdapter,
};
