import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { stopStatusPort } from '../../../ports/stopPost-status.port';
import { stopUsecase } from '../../stop-job.usecase';
import { STOP_STATUS_SERVICE } from '../../../../infrastructure/adapters/stop-status.adapter';

@Injectable({
  providedIn: 'root',
})
export class StopQuery implements stopUsecase {
  constructor(
    @Inject(STOP_STATUS_SERVICE) private stopStatusPort: stopStatusPort
  ) {}

  handle(jobId: string): Observable<any> {
    return this.stopStatusPort.execute(jobId);
  }
}
export const STOP_USECASE = new InjectionToken<stopUsecase>('stopUsecase');

export const S_STOP_PROVIDER_USECASE: Provider = {
  provide: STOP_USECASE,
  useClass: StopQuery,
};
