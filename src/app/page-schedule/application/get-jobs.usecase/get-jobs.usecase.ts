import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_GET_STATUS_JOB_SERVICE } from '../../infrastructure/providers/get-status-job-api.provider';
import { IGetStatusJobPort } from '../ports/status-port/get-status.port/get-status-job.port';
import { IStatus } from '../../domain/interfaces/status';
import { HTTP_GET_STATUS_SERVICE } from '../../infrastructure/providers/get-status-api.provider';
import { IGetStatusPort } from '../ports/status-port/get-status.port/get-status.port';


@Injectable({
  providedIn: 'root'
})
export class getJobsUsecase {

  constructor(@Inject(HTTP_GET_STATUS_JOB_SERVICE) private IGetStatusJobPort: IGetStatusJobPort,
  @Inject(HTTP_GET_STATUS_SERVICE) private IGetStatusPort: IGetStatusPort,
  ) {}

	getStatusJob(id: string):string {
		return this.IGetStatusJobPort.getStatusJob(id);
	}

  getStatus(): Observable<IStatus> {
		return this.IGetStatusPort.getStatus();
	}
}
