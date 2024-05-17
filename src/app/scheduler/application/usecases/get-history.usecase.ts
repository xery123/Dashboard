import { Observable } from 'rxjs';
import { HistoryAggregate } from '../../domain/aggregates/history';

export interface getHistoryUsecase {
  handle(id: string): Observable<HistoryAggregate>;
}
