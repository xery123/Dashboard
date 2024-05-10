import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postUrlStatusQueue } from '../../environments/post-url.statusQueue';
import { IStatusQueue } from '../../../domain/interface/status-queue';
import { Observable } from 'rxjs';
import { getStatusQueuePort } from '../../../aplication/ports/get-status.port/get-status-queue.port';
import { EnvironmentService } from '../../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class getStatusQueueAdapter implements getStatusQueuePort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  getStatusQueue(id: string): Observable<IStatusQueue> {
    const apiUrl = postUrlStatusQueue.postUrlStatusQueue(
      this.EnvironmentService
    );
    const url = `${apiUrl}${id}`;
    console.log('get statusQueue');
    return this.http.get<IStatusQueue>(url);
  }
}
