import { Observable } from 'rxjs';
import { HistoryAggregate } from '../../domain/aggregates/history';

export interface getHistoryProgressUsecase {
  handle(id: string): Observable<HistoryAggregate>;
}
