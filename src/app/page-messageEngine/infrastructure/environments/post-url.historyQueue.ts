import { environment } from '../../../../environments/environment';

export class postUrlHistoryQueue {
  static readonly API_URL_HISTORY_QUEUE = `${environment.ENVIRONMENT}/api/v4/jobs/messenger/queue/history/`;
  static readonly API_URL_HISTORY_QUEUE_FILTER =
    '?filter=ALL&pageSize=100&page=0';
}
