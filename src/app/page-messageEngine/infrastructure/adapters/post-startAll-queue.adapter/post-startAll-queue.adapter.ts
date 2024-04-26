import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../environments/token';
import { postUrlStartAllQueue } from '../../environments/post-url.startAll.Queue';
import { startAllQueuePort } from '../../../aplication/ports/startAll-stop.port/post-startAll-queue.port';

@Injectable({
  providedIn: 'root',
})
export class postStartAllQueueAdapter implements startAllQueuePort {
  constructor(private http: HttpClient) {}

  startAllQueue(): Observable<any> {
    const token = TokenService.TOKEN;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = postUrlStartAllQueue.API_URL_START_ALL_QUEUE;
    const url = `${apiUrl}start`;
    console.log('get startAllQueue');
    return this.http.get(url, { headers });
  }
}
