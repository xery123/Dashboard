import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEnableStatusPort } from '../../ports/status-port/enable-disable.port/enablePost-status.port';
import { IDisableStatusPort } from '../../ports/status-port/enable-disable.port/disablePost-status.port';
import { HTTP_ENABLE_STATUS_SERVICE } from '../../../infrastructure/providers/postEnable-status-api.provider';
import { HTTP_DISABLE_STATUS_SERVICE } from '../../../infrastructure/providers/postDisable-status-api.provider';

@Injectable({
  providedIn: 'root'
})
export class enableDisableJobsUsecase {

  constructor(@Inject(HTTP_ENABLE_STATUS_SERVICE) private IEnableStatusPort: IEnableStatusPort,
  @Inject(HTTP_DISABLE_STATUS_SERVICE) private IDisableStatusPort: IDisableStatusPort,
  ) {}

  enableJob(jobId: string): Observable<any> {
		return this.IEnableStatusPort.enableJob(jobId);
	}

  disableJob(jobId: string): Observable<any> {
		return this.IDisableStatusPort.disableJob(jobId);
	}

}
