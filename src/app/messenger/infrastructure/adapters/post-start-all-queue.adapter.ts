import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../end points/end-points';
import { startAllQueuePort } from '../../aplication/ports/post-start-all-queue.port';
import { EnvironmentService } from '../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class postStartAllQueueAdapter implements startAllQueuePort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(): Observable<any> {
    const apiUrl = ENDPOINTS.START_ALL(this.EnvironmentService);

    console.log('get startAllQueue');
    return this.http.get(apiUrl);
  }
}
export const START_ALL_QUEUE = new InjectionToken<startAllQueuePort>(
  'startAllQueuePort'
);

export const START_ALL_QUEUE_PROVIDER: Provider = {
  provide: START_ALL_QUEUE,
  useClass: postStartAllQueueAdapter,
};
