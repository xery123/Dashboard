import { Observable } from 'rxjs';

import { HistoryJobProgress } from '../../domain/historyJobProgress';

export interface historyJobProgressPort {
  execute(id: string): Observable<HistoryJobProgress>;
}
