import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TokenService } from '../../token';
import { postUrlStatusQueue } from '../../post-url.statusQueue';
import { IStatusQueue } from '../../../domain/interface/status-queue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class getStatusQueueAdapter {
  constructor(private http: HttpClient) {}

  getStatusQueue(id: string): Observable<IStatusQueue> {
    const apiUrl = postUrlStatusQueue.API_URL_STATUS_QUEUE;
    const url = `${apiUrl}${id}`;
    const token = TokenService.TOKEN;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('get statusQueue');
    return this.http.get<IStatusQueue>(url, { headers });
  }
}
