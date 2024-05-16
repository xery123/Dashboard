import { Observable } from 'rxjs';
import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';

import { Status } from '../../../../domain/status';
import { getStatusPort } from '../../../ports/get-status.port';
import { getStatusUsecase } from '../../get-status.usecase';
import { GET_STATUS } from '../../../../infrastructure/adapters/get-status.adapter';

@Injectable({
  providedIn: 'root',
})
export class GetStatusQuery implements getStatusUsecase {
  constructor(
    @Inject(GET_STATUS)
    private getStatusPort: getStatusPort
  ) {}
  handle(): Observable<Status> {
    return this.getStatusPort.execute();
  }
}
export const GET_STATUS_USECASE = new InjectionToken<getStatusUsecase>(
  'getStatusUsecase'
);

export const GET_STATUS_PROVIDER_USECASE: Provider = {
  provide: GET_STATUS_USECASE,
  useClass: GetStatusQuery,
};
