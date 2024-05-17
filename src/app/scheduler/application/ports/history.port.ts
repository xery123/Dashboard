import { Observable } from 'rxjs';
import { HistoryAggregate } from '../../domain/aggregates/history';

export interface historyPort {
  execute(id: string): Observable<HistoryAggregate>;
}
