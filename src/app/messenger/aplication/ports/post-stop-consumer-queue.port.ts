import { Observable } from 'rxjs';

export interface stopConsumerQueuePort {
  execute(id: string): Observable<any>;
}
