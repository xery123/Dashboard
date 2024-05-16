import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { disableModuleUsecase } from '../../disable-module.usecase';
import { disableModulePort } from '../../../ports/disablePost-status.port';
import { DISABLE_MODULE_SERVICE } from '../../../../infrastructure/adapters/disable-status.adapter';

@Injectable({
  providedIn: 'root',
})
export class DisableModuleQuery implements disableModuleUsecase {
  constructor(
    @Inject(DISABLE_MODULE_SERVICE)
    private disableModulePort: disableModulePort
  ) {}

  handle(jobId: string): Observable<any> {
    return this.disableModulePort.execute(jobId);
  }
}
export const DISABLE_MODULE_USECASE = new InjectionToken<disableModuleUsecase>(
  'disableModuleUsecase'
);

export const S_DISABLE_MODULE_PROVIDER_USECASE: Provider = {
  provide: DISABLE_MODULE_USECASE,
  useClass: DisableModuleQuery,
};
