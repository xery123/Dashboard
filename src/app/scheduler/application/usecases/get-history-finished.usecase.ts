import { Observable } from 'rxjs';
import { HistoryJobFinished } from '../../domain/historyJobFinished';

export interface getHistoryFinishedUsecase {
  handle(id: string): Observable<HistoryJobFinished>;
}
