import { InjectionToken, Provider } from '@angular/core';
import { IStartAllStatusPort } from '../../application/ports/status-port/start-stop-remove.port/startAllPost-status.port';
import { postStartAllStatusAdapter } from '../job-status.adapter/postAllStart-status.adapter';


export const HTTP_ALLSTART_STATUS_SERVICE = new InjectionToken<IStartAllStatusPort>('IStartAllStatusPort');

export const POST_STARTALL_STATUS_API_PROVIDER: Provider = { provide: HTTP_ALLSTART_STATUS_SERVICE, useClass: postStartAllStatusAdapter };
