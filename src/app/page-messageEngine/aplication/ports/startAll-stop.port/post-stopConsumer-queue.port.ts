import { Observable } from 'rxjs';

export interface stopConsumerQueuePort {
  stopConsumerQueue(id: string): Observable<any>;
}
