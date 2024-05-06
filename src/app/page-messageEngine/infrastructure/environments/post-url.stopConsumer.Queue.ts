import { environment } from '../../../environments/environment.prod';

export class postUrlStopConsumerQueue {
  static readonly API_URL_STOP_CONSUMER_QUEUE = `${environment.API_URL_ENVIRONMENT}/api/v4/jobs/messenger/queue/stop-consumers/`;
}
