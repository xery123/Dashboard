import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { getStatusJobPort } from '../../../ports/get-status-job.port';
import { StatusJob } from '../../../../domain/statusJob';
import { getStatusJobUsecase } from '../../get-status-job.usecase';
import { GET_STATUS_JOB_SERVICE } from '../../../../infrastructure/adapters/get-status-job.adapter';

@Injectable({
  providedIn: 'root',
})
export class GetStatusJobQuery implements getStatusJobUsecase {
  constructor(
    @Inject(GET_STATUS_JOB_SERVICE)
    private getStatusJobPort: getStatusJobPort
  ) {}

  handle(id: string): Observable<StatusJob> {
    return this.getStatusJobPort.execute(id);
  }
}
export const GET_STATUS_JOB_USECASE = new InjectionToken<getStatusJobUsecase>(
  'getStatusJobUsecase'
);

export const S_GET_STATUS_JOB_PROVIDER_USECASE: Provider = {
  provide: GET_STATUS_JOB_USECASE,
  useClass: GetStatusJobQuery,
};
