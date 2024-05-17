import { Observable } from 'rxjs';
import { Status } from '../../domain/aggregates/status';

export interface getStatusPort {
  execute(): Observable<Status>;
}
