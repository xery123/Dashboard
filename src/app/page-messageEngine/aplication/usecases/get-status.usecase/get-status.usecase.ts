import { Observable } from 'rxjs';
import { IStatusQueue } from '../../../domain/interface/status-queue';
import { IStatus } from '../../../domain/interface/status';
import { Inject, Injectable } from '@angular/core';
import { getStatusQueuePort } from '../../ports/get-status.port/get-status-queue.port';
import { getStatusPort } from '../../ports/get-status.port/get-status.port';
import { HTTP_GET_STATUS_QUEUE } from '../../../infrastructure/providers/get-status.provider/get-status-queue.provider';
import { HTTP_GET_STATUS } from '../../../infrastructure/providers/get-status.provider/get-status.provider';

@Injectable({
  providedIn: 'root',
})
export class getStatusUsecase {
  constructor(
    @Inject(HTTP_GET_STATUS_QUEUE)
    private getStatusQueuePort: getStatusQueuePort,
    @Inject(HTTP_GET_STATUS)
    private getStatusPort: getStatusPort
  ) {}

  getStatusQueue(id: string): Observable<IStatusQueue> {
    return this.getStatusQueuePort.getStatusQueue(id);
  }

  getStatus(): Observable<IStatus> {
    return this.getStatusPort.getStatus();
  }
}
