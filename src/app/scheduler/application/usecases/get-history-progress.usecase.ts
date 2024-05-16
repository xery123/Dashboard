import { Observable } from 'rxjs';
import { HistoryJobProgress } from '../../domain/historyJobProgress';

export interface getHistoryProgressUsecase {
  handle(id: string): Observable<HistoryJobProgress>;
}
