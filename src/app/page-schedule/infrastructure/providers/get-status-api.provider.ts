import { InjectionToken, Provider } from '@angular/core';
import { IGetStatusPort } from '../../application/ports/status-port/get-status.port/get-status.port';
import { getStatusAdapter } from '../job-status.adapter/get-status.adapter';

export const HTTP_GET_STATUS_SERVICE = new InjectionToken<IGetStatusPort>('IGetStatusPort');

export const GET_STATUS_API_PROVIDER: Provider = { provide: HTTP_GET_STATUS_SERVICE, useClass: getStatusAdapter };
