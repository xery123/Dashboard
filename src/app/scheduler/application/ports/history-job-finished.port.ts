import { Observable } from 'rxjs';
import { HistoryJobFinished } from '../../domain/historyJobFinished';

export interface historyJobFinishedPort {
  execute(id: string): Observable<HistoryJobFinished>;
}
