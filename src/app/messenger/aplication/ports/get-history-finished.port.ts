import { Observable } from 'rxjs';
import { HistoryFinished } from '../../domain/history-queue-longest-finished';

export interface getHistoryFinishedPort {
  execute(id: string): Observable<HistoryFinished>;
}
