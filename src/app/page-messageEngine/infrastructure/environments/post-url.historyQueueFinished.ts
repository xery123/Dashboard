import { environment } from '../../../../environments/environment';

export class postUrlHistoryQueueFinished {
  static readonly API_URL_HISTORY_QUEUE_FINISHED = `${environment.ENVIRONMENT}/api/v4/jobs/messenger/queue/history/`;
  static readonly API_URL_HISTORY_QUEUE_FINISHED_FILTER =
    '?filter=LONGEST_FINISHED&pageSize=20&page=0';
}
