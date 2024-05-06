import { environment } from '../../../../environments/environment.development';

export class postUrlStatusQueue {
  static readonly API_URL_STATUS_QUEUE = `${environment.API_URL_ENVIRONMENT}/api/v4/jobs/messenger/queue/status/`;
}
