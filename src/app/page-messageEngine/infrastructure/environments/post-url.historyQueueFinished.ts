import { environment } from '../../../../environments/environment.development';

export class postUrlHistoryQueueFinished {
  static readonly API_URL_HISTORY_QUEUE_FINISHED = `${environment.API_URL_ENVIRONMENT}/api/v4/jobs/messenger/queue/history/`;
  static readonly API_URL_HISTORY_QUEUE_FINISHED_FILTER =
    '?filter=LONGEST_FINISHED&pageSize=20&page=0';
}
