import { Observable } from 'rxjs';
import { HistoryAggregate } from '../../domain/aggregates/history';

export interface getHistoryProgressPort {
  execute(id: string): Observable<HistoryAggregate>;
}
