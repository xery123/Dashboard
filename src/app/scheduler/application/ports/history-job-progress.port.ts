import { Observable } from 'rxjs';

import { HistoryAggregate } from '../../domain/aggregates/history';

export interface historyJobProgressPort {
  execute(id: string): Observable<HistoryAggregate>;
}
