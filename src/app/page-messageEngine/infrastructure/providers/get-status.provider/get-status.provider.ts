import { InjectionToken, Provider } from '@angular/core';
import { getStatusPort } from '../../../aplication/ports/get-status.port/get-status.port';
import { getStatusAdapter } from '../../adapters/get-status.adapter/get-status.adapter';

export const HTTP_GET_STATUS = new InjectionToken<getStatusPort>(
  'getStatusPort'
);

export const GET_STATUS_PROVIDER: Provider = {
  provide: HTTP_GET_STATUS,
  useClass: getStatusAdapter,
};
