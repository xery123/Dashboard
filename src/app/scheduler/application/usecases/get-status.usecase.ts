import { Observable } from 'rxjs';
import { Status } from '../../domain/status';

export interface getStatusUsecase {
  handle(): Observable<Status>;
}
