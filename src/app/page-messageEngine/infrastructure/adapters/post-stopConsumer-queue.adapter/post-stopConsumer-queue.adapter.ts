import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlStopConsumerQueue } from '../../environments/post-url.stopConsumer.Queue';
import { stopConsumerQueuePort } from '../../../aplication/ports/startAll-stop.port/post-stopConsumer-queue.port';

@Injectable({
  providedIn: 'root',
})
export class postStopConsumerQueueAdapter implements stopConsumerQueuePort {
  constructor(private http: HttpClient) {}

  stopConsumerQueue(id: string): Observable<any> {
    const apiUrl = postUrlStopConsumerQueue.API_URL_STOP_CONSUMER_QUEUE;
    const url = `${apiUrl}${id}`;
    console.log('get stopConsumer');
    return this.http.delete(url);
  }
}
