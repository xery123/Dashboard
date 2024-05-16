import { Observable } from 'rxjs';
import { HistoryProgress } from '../../domain/history-queue-longest-progress';

export interface getHistoryProgressUsecase {
  handle(id: string): Observable<HistoryProgress>;
}
