import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { enableModulePort } from '../../../ports/enablePost-status.port';
import { enableModuleUsecase } from '../../enable-module.usecase';
import { ENABLE_MODULE_SERVICE } from '../../../../infrastructure/adapters/enable-status.adapter';

@Injectable({
  providedIn: 'root',
})
export class EnableModuleQuery implements enableModuleUsecase {
  constructor(
    @Inject(ENABLE_MODULE_SERVICE)
    private enableModulePort: enableModulePort
  ) {}

  handle(jobId: string): Observable<any> {
    return this.enableModulePort.execute(jobId);
  }
}
export const ENABLE_MODULE_USECASE = new InjectionToken<enableModuleUsecase>(
  'enableModuleUsecase'
);

export const S_ENABLE_MODULE_PROVIDER_USECASE: Provider = {
  provide: ENABLE_MODULE_USECASE,
  useClass: EnableModuleQuery,
};
