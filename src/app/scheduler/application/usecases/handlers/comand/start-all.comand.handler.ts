import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';

import { startAllUsecase } from '../../start-all-job.usecase';
import { startAllStatusPort } from '../../../ports/startAllPost-status.port';
import { START_ALL_STATUS_SERVICE } from '../../../../infrastructure/adapters/start-all-status.adapter';

@Injectable({
  providedIn: 'root',
})
export class StartAllQuery implements startAllUsecase {
  constructor(
    @Inject(START_ALL_STATUS_SERVICE)
    private startAllStatusPort: startAllStatusPort
  ) {}

  handle(): Observable<any> {
    return this.startAllStatusPort.execute();
  }
}
export const START_ALL_USECASE = new InjectionToken<startAllUsecase>(
  'startAllUsecase'
);

export const S_START_ALL_PROVIDER_USECASE: Provider = {
  provide: START_ALL_USECASE,
  useClass: StartAllQuery,
};
