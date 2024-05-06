import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postUrlStatusQueue } from '../../environments/post-url.statusQueue';
import { IStatusQueue } from '../../../domain/interface/status-queue';
import { Observable } from 'rxjs';
import { getStatusQueuePort } from '../../../aplication/ports/get-status.port/get-status-queue.port';

@Injectable({
  providedIn: 'root',
})
export class getStatusQueueAdapter implements getStatusQueuePort {
  constructor(private http: HttpClient) {}

  getStatusQueue(id: string): Observable<IStatusQueue> {
    const apiUrl = postUrlStatusQueue.API_URL_STATUS_QUEUE;
    const url = `${apiUrl}${id}`;
    console.log('get statusQueue');
    return this.http.get<IStatusQueue>(url);
  }
}
