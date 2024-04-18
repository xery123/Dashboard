import { InjectionToken, Provider } from '@angular/core';
import { postRemoveStatusAdapter } from '../job-status.adapter/postRemove-status.adapter';
import { IRemoveStatusPort } from '../../application/ports/status-port/start-stop-remove.port/removePost-status.port';


export const HTTP_REMOVE_STATUS_SERVICE = new InjectionToken<IRemoveStatusPort>('IGetStatusPort');

export const POST_REMOVE_STATUS_API_PROVIDER: Provider = { provide: HTTP_REMOVE_STATUS_SERVICE, useClass: postRemoveStatusAdapter };
