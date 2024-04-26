import { environment } from '../../../../environments/environment';

export class postUrlStatusQueue {
  static readonly API_URL_STATUS_QUEUE = `${environment.ENVIRONMENT}/api/v4/jobs/messenger/queue/status/`;
}
