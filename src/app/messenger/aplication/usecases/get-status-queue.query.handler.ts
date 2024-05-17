import { Observable } from 'rxjs';
import { StatusQueue } from '../../domain/aggregates/status_queue';

export interface getStatusQueueUsecase {
  handle(id: string): Observable<StatusQueue>;
}
