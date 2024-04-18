import { InjectionToken, Provider } from '@angular/core';
import { IStartStatusPort } from '../../application/ports/status-port/start-stop-remove.port/startPost-status.port';
import { postStartStatusAdapter } from '../job-status.adapter/postStart-status.adapter';

export const HTTP_START_STATUS_SERVICE = new InjectionToken<IStartStatusPort>('IStartStatusPort');

export const POST_START_STATUS_API_PROVIDER: Provider = { provide: HTTP_START_STATUS_SERVICE, useClass: postStartStatusAdapter };
