import { Observable } from 'rxjs';
import { HistoryAggregate } from '../../domain/aggregates/history';

export interface historyJobFinishedPort {
  execute(id: string): Observable<HistoryAggregate>;
}
