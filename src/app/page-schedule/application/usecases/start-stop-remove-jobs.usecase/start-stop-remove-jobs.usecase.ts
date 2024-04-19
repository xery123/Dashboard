import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_START_STATUS_SERVICE } from '../../../infrastructure/providers/postStart-status-api.provider';
import { IStartStatusPort } from '../../ports/status-port/start-stop-remove.port/startPost-status.port';
import { HTTP_STOP_STATUS_SERVICE } from '../../../infrastructure/providers/postStop-status-api.provider';
import { IStopStatusPort } from '../../ports/status-port/start-stop-remove.port/stopPost-status.port';
import { HTTP_REMOVE_STATUS_SERVICE } from '../../../infrastructure/providers/postRemove-status-api.provider';
import { IRemoveStatusPort } from '../../ports/status-port/start-stop-remove.port/removePost-status.port';
import { HTTP_ALLSTART_STATUS_SERVICE } from '../../../infrastructure/providers/postAllStart-status-api.provider';
import { IStartAllStatusPort } from '../../ports/status-port/start-stop-remove.port/startAllPost-status.port';

@Injectable({
  providedIn: 'root'
})
export class startStopRemoveJobsUsecase {

  constructor(@Inject(HTTP_START_STATUS_SERVICE) private IStartStatusPort: IStartStatusPort,
  @Inject(HTTP_STOP_STATUS_SERVICE) private IStopStatusPort: IStopStatusPort,
  @Inject(HTTP_REMOVE_STATUS_SERVICE) private IRemoveStatusPort: IRemoveStatusPort,
  @Inject(HTTP_ALLSTART_STATUS_SERVICE) private IStartAllStatusPort: IStartAllStatusPort,
  ) {}

  startJob(jobId: string): Observable<any> {
		return this.IStartStatusPort.startJob(jobId);
	}

  removeJob(jobId: string): Observable<any> {
		return this.IRemoveStatusPort.removeJob(jobId);
	}

  startAllJob(): Observable<any> {
		return this.IStartAllStatusPort.startAllJob();
	}

  stopJob(jobId: string): Observable<any> {
		return this.IStopStatusPort.stopJob(jobId);
	}

}
