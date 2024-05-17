import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Provider } from '@angular/core';
import { ENDPOINTS } from '../end points/end-points';
import { Observable } from 'rxjs';

import { EnvironmentService } from '../../../select environment/select-environment.service';
import { getStatusQueuePort } from '../../aplication/ports/get-status-queue.port';
import { StatusQueue } from '../../domain/aggregates/status_queue';

@Injectable({
  providedIn: 'root',
})
export class getStatusQueueAdapter implements getStatusQueuePort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(id: string): Observable<StatusQueue> {
    const apiUrl = ENDPOINTS.STATUS_QUEUE(this.EnvironmentService);
    const url = `${apiUrl}${id}`;
    console.log('get statusQueue');
    return this.http.get<StatusQueue>(url);
  }
}
export const GET_STATUS_QUEUE = new InjectionToken<getStatusQueuePort>(
  'getStatusQueuePort'
);

export const GET_STATUS_QUEUE_PROVIDER: Provider = {
  provide: GET_STATUS_QUEUE,
  useClass: getStatusQueueAdapter,
};
