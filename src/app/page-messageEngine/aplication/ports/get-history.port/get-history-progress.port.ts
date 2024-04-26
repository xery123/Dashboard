import { Observable } from 'rxjs';
import { IHistoryProgress } from '../../../domain/interface/history-queue-longest-progress';

export interface getHistoryProgressPort {
  getHistoryProgress(id: string): Observable<IHistoryProgress>;
}
