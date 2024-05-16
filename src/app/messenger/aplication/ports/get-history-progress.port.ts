import { Observable } from 'rxjs';
import { HistoryProgress } from '../../domain/history-queue-longest-progress';

export interface getHistoryProgressPort {
  execute(id: string): Observable<HistoryProgress>;
}
