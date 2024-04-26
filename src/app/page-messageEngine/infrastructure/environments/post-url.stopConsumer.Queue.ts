import { environment } from '../../../../environments/environment';

export class postUrlStopConsumerQueue {
  static readonly API_URL_STOP_CONSUMER_QUEUE = `${environment.ENVIRONMENT}/api/v4/jobs/messenger/queue/stop-consumers/`;
}
