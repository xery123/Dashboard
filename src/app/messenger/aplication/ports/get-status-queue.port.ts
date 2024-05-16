import { Observable } from 'rxjs';
import { StatusQueue } from '../../domain/status-queue';

export interface getStatusQueuePort {
  execute(id: string): Observable<StatusQueue>;
}
