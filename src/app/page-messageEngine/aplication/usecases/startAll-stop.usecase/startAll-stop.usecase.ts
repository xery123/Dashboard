import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { startAllQueuePort } from '../../ports/startAll-stop.port/post-startAll-queue.port';
import { stopConsumerQueuePort } from '../../ports/startAll-stop.port/post-stopConsumer-queue.port';
import { HTTP_START_ALL_QUEUE } from '../../../infrastructure/providers/startAll-stop.provider/post-startAll-queue.provider';
import { HTTP_STOP_CONSUMER_QUEUE } from '../../../infrastructure/providers/startAll-stop.provider/post-stopConsumer-queue.provider';

@Injectable({
  providedIn: 'root',
})
export class startAllStopUsecase {
  constructor(
    @Inject(HTTP_START_ALL_QUEUE)
    private startAllQueuePort: startAllQueuePort,
    @Inject(HTTP_STOP_CONSUMER_QUEUE)
    private stopConsumerQueuePort: stopConsumerQueuePort
  ) {}

  startAllQueue(): Observable<any> {
    return this.startAllQueuePort.startAllQueue();
  }

  stopConsumerQueue(id: string): Observable<any> {
    return this.stopConsumerQueuePort.stopConsumerQueue(id);
  }
}
