import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { getStatusUsecase } from '../../get-status.usecase';
import { getStatusPort } from '../../../ports/get-status.port';
import { Status } from '../../../../domain/status';
import { GET_STATUS_SERVICE } from '../../../../infrastructure/adapters/get-status.adapter';

@Injectable({
  providedIn: 'root',
})
export class GetStatusQuery implements getStatusUsecase {
  constructor(
    @Inject(GET_STATUS_SERVICE) private getStatusPort: getStatusPort
  ) {}

  handle(): Observable<Status> {
    return this.getStatusPort.execute();
  }
}
export const GET_STATUS_USECASE = new InjectionToken<getStatusUsecase>(
  'getStatusUsecase'
);

export const S_GET_STATUS_PROVIDER_USECASE: Provider = {
  provide: GET_STATUS_USECASE,
  useClass: GetStatusQuery,
};
