import { Observable } from 'rxjs';
import { StatusJob } from '../../domain/aggregates/status-job';

export interface getStatusJobPort {
  execute(id: string): Observable<StatusJob>;
}
