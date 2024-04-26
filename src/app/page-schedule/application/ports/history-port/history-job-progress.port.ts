import { Observable } from 'rxjs';

import { IHistoryJobProgress } from '../../../domain/interfaces/historyJobProgress';

export interface IHistoryJobProgressPort {
  getIdProgress(id: string): Observable<IHistoryJobProgress>;
}
