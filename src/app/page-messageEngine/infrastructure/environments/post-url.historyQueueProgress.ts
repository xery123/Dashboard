import { environment } from '../../../../environments/environment';

export class postUrlHistoryQueueProgress {
  static readonly API_URL_HISTORY_QUEUE_PROGRESS = `${environment.ENVIRONMENT}/api/v4/jobs/messenger/queue/history/`;
  static readonly API_URL_HISTORY_QUEUE_PROGRESS_FILTER =
    '?filter=LONGEST_IN_PROGRESS&page=0&pageSize=20';
}
