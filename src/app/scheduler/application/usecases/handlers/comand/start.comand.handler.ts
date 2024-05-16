import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { startStatusPort } from '../../../ports/startPost-status.port';
import { startUsecase } from '../../start-job.usecase';
import { START_STATUS_SERVICE } from '../../../../infrastructure/adapters/start-status.adapter';

@Injectable({
  providedIn: 'root',
})
export class StartQuery implements startUsecase {
  constructor(
    @Inject(START_STATUS_SERVICE)
    private startStatusPort: startStatusPort
  ) {}

  handle(jobId: string): Observable<any> {
    return this.startStatusPort.execute(jobId);
  }
}
export const START_USECASE = new InjectionToken<startUsecase>('startUsecase');

export const S_START_PROVIDER_USECASE: Provider = {
  provide: START_USECASE,
  useClass: StartQuery,
};
