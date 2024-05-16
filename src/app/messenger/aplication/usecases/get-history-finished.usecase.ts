import { Observable } from 'rxjs';
import { HistoryFinished } from '../../domain/history-queue-longest-finished';

export interface getHistoryFinishedUsecase {
  handle(id: string): Observable<HistoryFinished>;
}
