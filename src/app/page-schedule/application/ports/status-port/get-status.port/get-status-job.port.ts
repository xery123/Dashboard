import { Observable } from 'rxjs';
import { IStatusJob } from '../../../../domain/interfaces/statusJob';

export interface IGetStatusJobPort {
  getStatusJob(id: string): Observable<IStatusJob>;
}
