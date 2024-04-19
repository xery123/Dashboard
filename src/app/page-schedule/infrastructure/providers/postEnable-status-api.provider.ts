import { InjectionToken, Provider } from '@angular/core';
import { IEnableStatusPort } from '../../application/ports/status-port/enable-disable.port/enablePost-status.port';
import { postEnableStatusAdapter } from '../job-status.adapter/postEnable-status.adapter';

export const HTTP_ENABLE_STATUS_SERVICE = new InjectionToken<IEnableStatusPort>('IEnableStatusPort');

export const POST_ENABLE_STATUS_API_PROVIDER: Provider = { provide: HTTP_ENABLE_STATUS_SERVICE, useClass: postEnableStatusAdapter };
