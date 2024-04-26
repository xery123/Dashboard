import { Observable } from 'rxjs';
import { IHistoryQueue } from '../../../domain/interface/history-queue';

export interface getHistoryPort {
  getHistory(id: string): Observable<IHistoryQueue>;
}
