import { Observable } from 'rxjs';
import { HistoryAggregate } from '../../domain/aggregates/history';

export interface getHistoryFinishedPort {
  execute(id: string): Observable<HistoryAggregate>;
}
