import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { stopConsumerQueuePort } from '../../../aplication/ports/startAll-stop.port/post-stopConsumer-queue.port';
import { PostUrlStopConsumerQueue } from '../../environments/post-url.stopConsumer.Queue';
import { EnvironmentService } from '../../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class postStopConsumerQueueAdapter implements stopConsumerQueuePort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  stopConsumerQueue(id: string): Observable<any> {
    const apiUrl = PostUrlStopConsumerQueue.PostUrlStopConsumerQueue(
      this.EnvironmentService
    );
    const url = `${apiUrl}${id}`;
    console.log('get stopConsumer');
    return this.http.delete(url);
  }
}
