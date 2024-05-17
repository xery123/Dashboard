import { Observable } from 'rxjs';
import { StatusJob } from '../../domain/aggregates/status-job';

export interface getStatusJobUsecase {
  handle(id: string): Observable<StatusJob>;
}
