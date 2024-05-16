import { Observable } from 'rxjs';
import { Status } from '../../domain/status';

export interface getStatusPort {
  execute(): Observable<Status>;
}
