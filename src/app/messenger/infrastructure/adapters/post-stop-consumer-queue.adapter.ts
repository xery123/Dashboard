import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { stopConsumerQueuePort } from '../../aplication/ports/post-stop-consumer-queue.port';
import { ENDPOINTS } from '../end points/end-points';
import { EnvironmentService } from '../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class postStopConsumerQueueAdapter implements stopConsumerQueuePort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  execute(id: string): Observable<any> {
    const apiUrl = ENDPOINTS.STOP_CONSUMERS(this.EnvironmentService);
    const url = `${apiUrl}${id}`;
    console.log('get stopConsumer');
    return this.http.delete(url);
  }
}
export const STOP_CONSUMER_QUEUE = new InjectionToken<stopConsumerQueuePort>(
  'stopConsumerQueuePort'
);

export const STOP_CONSUMER_QUEUE_PROVIDER: Provider = {
  provide: STOP_CONSUMER_QUEUE,
  useClass: postStopConsumerQueueAdapter,
};
