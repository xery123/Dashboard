import { Observable } from 'rxjs';
import { HistoryAggregate } from '../../domain/aggregates/history';

export interface getHistoryPort {
  execute(id: string): Observable<HistoryAggregate>;
}
