import { Observable } from 'rxjs';
import { HistoryQueue } from '../../domain/history-queue';

export interface getHistoryPort {
  execute(id: string): Observable<HistoryQueue>;
}
