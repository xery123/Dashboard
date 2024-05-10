import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlStartAllQueue } from '../../environments/post-url.startAll.Queue';
import { startAllQueuePort } from '../../../aplication/ports/startAll-stop.port/post-startAll-queue.port';
import { EnvironmentService } from '../../../../select environment/select-environment.service';
import { postUrlStatusQueue } from '../../environments/post-url.statusQueue';

@Injectable({
  providedIn: 'root',
})
export class postStartAllQueueAdapter implements startAllQueuePort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  startAllQueue(): Observable<any> {
    const apiUrl = postUrlStartAllQueue.postUrlStartAllQueue(
      this.EnvironmentService
    );
    const url = `${apiUrl}start`;
    console.log('get startAllQueue');
    return this.http.get(url);
  }
}
