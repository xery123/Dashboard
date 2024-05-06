import { environment } from '../../../environments/environment.prod';

export class postUrlHistoryQueueProgress {
  static readonly API_URL_HISTORY_QUEUE_PROGRESS = `${environment.API_URL_ENVIRONMENT}/api/v4/jobs/messenger/queue/history/`;
  static readonly API_URL_HISTORY_QUEUE_PROGRESS_FILTER =
    '?filter=LONGEST_IN_PROGRESS&page=0&pageSize=20';
}
