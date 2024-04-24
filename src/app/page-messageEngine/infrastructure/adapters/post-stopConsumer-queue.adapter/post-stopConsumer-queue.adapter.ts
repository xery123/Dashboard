import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../token';
import { postUrlStopConsumerQueue } from '../../post-url.stopConsumer.Queue';

@Injectable({
  providedIn: 'root',
})
export class postStopConsumerQueueAdapter {
  constructor(private http: HttpClient) {}

  stopConsumerQueue(jobId: string): Observable<any> {
    const token = TokenService.TOKEN;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = postUrlStopConsumerQueue.API_URL_STOP_CONSUMER_QUEUE;
    const url = `${apiUrl}${jobId}`;
    console.log('get stopConsumer');
    return this.http.delete(url, { headers });
  }
}
