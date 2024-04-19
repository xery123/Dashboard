import { InjectionToken, Provider } from '@angular/core';
import { IGetStatusPort } from '../../application/ports/status-port/get-status.port/get-status.port';
import { postDisableStatusAdapter } from '../job-status.adapter/postDisable-status.adapter';


export const HTTP_DISABLE_STATUS_SERVICE = new InjectionToken<IGetStatusPort>('IGetStatusPort');

export const POST_DISABLE_STATUS_API_PROVIDER: Provider = { provide: HTTP_DISABLE_STATUS_SERVICE, useClass: postDisableStatusAdapter };
