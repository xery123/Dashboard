import { Observable } from 'rxjs';
import { IStatusJob } from '../../../../domain/interfaces/statusJob';
import { JobAsyncAggregateJobExecution1 } from '../../../../domain/interfaces/status';

export interface IGetStatusJobPort {
  getStatusJob(id: string): Observable<JobAsyncAggregateJobExecution1>;
}
