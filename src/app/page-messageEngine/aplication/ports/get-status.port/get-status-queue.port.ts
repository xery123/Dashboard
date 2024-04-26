import { Observable } from 'rxjs';
import { IStatusQueue } from '../../../domain/interface/status-queue';

export interface getStatusQueuePort {
  getStatusQueue(id: string): Observable<IStatusQueue>;
}
