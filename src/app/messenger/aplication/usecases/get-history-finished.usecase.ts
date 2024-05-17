import { Observable } from 'rxjs';
import { HistoryAggregate } from '../../domain/aggregates/history';

export interface getHistoryFinishedUsecase {
  handle(id: string): Observable<HistoryAggregate>;
}
