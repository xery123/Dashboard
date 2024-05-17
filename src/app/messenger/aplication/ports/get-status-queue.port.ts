import { Observable } from 'rxjs';
import { StatusQueue } from '../../domain/aggregates/status_queue';

export interface getStatusQueuePort {
  execute(id: string): Observable<StatusQueue>;
}
