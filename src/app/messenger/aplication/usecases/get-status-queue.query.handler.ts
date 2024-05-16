import { Observable } from 'rxjs';
import { StatusQueue } from '../../domain/status-queue';
import { Status } from '../../domain/status';

export interface getStatusQueueUsecase {
  handle(id: string): Observable<StatusQueue>;
}
