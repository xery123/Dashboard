import { environment } from '../../../../environments/environment.development';

export class postUrlHistoryQueue {
  static readonly API_URL_HISTORY_QUEUE = `${environment.API_URL_ENVIRONMENT}/api/v4/jobs/messenger/queue/history/`;
  static readonly API_URL_HISTORY_QUEUE_FILTER =
    '?filter=ALL&pageSize=100&page=0';
}
