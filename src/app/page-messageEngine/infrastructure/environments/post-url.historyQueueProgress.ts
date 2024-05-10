import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlHistoryQueueProgress {
  static postUrlHistoryQueueProgress(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/history/`;
  }
  static readonly API_URL_HISTORY_QUEUE_PROGRESS_FILTER =
    '?filter=LONGEST_IN_PROGRESS&page=0&pageSize=20';
}
