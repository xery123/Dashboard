import { Observable } from 'rxjs';
import { StatusJob } from '../../domain/statusJob';

export interface getStatusJobUsecase {
  handle(id: string): Observable<StatusJob>;
}
