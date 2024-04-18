import { getStatusJobAdapter } from '../job-status.adapter/get-status-job.adapter';
import { InjectionToken, Provider } from '@angular/core';
import { IGetStatusJobPort } from '../../application/ports/status-port/get-status.port/get-status-job.port';

export const HTTP_GET_STATUS_JOB_SERVICE = new InjectionToken<IGetStatusJobPort>('IGetStatusPort');

export const GET_STATUS_JOB_API_PROVIDER: Provider = { provide: HTTP_GET_STATUS_JOB_SERVICE, useClass: getStatusJobAdapter };
