import { Observable } from 'rxjs';
import { StatusJob } from '../../domain/statusJob';

export interface getStatusJobPort {
  execute(id: string): Observable<StatusJob>;
}
