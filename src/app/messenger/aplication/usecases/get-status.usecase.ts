import { Observable } from 'rxjs';
import { Status } from '../../domain/aggregates/status';

export interface getStatusUsecase {
  handle(): Observable<Status>;
}
