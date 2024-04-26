import { Observable } from 'rxjs';
import { IHistoryFinished } from '../../../domain/interface/history-queue-longest-finished';

export interface getHistoryFinishedPort {
  getHistoryFinished(id: string): Observable<IHistoryFinished>;
}
