import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { removeStatusPort } from '../../../ports/removePost-status.port';
import { removeUsecase } from '../../remove-job.usecase';
import { REMOVE_STATUS_SERVICE } from '../../../../infrastructure/adapters/remove-status.adapter';

@Injectable({
  providedIn: 'root',
})
export class RemoveQuery implements removeUsecase {
  constructor(
    @Inject(REMOVE_STATUS_SERVICE)
    private removeStatusPort: removeStatusPort
  ) {}

  handle(jobId: string): Observable<any> {
    return this.removeStatusPort.execute(jobId);
  }
}
export const REMOVE_USECASE = new InjectionToken<removeUsecase>(
  'removeUsecase'
);

export const S_REMOVE_PROVIDER_USECASE: Provider = {
  provide: REMOVE_USECASE,
  useClass: RemoveQuery,
};
