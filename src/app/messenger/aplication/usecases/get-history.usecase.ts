import { Observable } from 'rxjs';
import { HistoryQueue } from '../../domain/history-queue';

export interface getHistoryUsecase {
  handle(id: string): Observable<HistoryQueue>;
}
