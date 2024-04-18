import { InjectionToken, Provider } from '@angular/core';

import { postStopStatusAdapter } from '../job-status.adapter/postStop-status.adapter';
import { IGetStatusPort } from '../../application/ports/status-port/get-status.port/get-status.port';


export const HTTP_STOP_STATUS_SERVICE = new InjectionToken<IGetStatusPort>('IGetStatusPort');

export const POST_STOP_STATUS_API_PROVIDER: Provider = { provide: HTTP_STOP_STATUS_SERVICE, useClass: postStopStatusAdapter };
