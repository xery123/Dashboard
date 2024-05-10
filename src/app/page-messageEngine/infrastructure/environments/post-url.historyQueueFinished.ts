import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlHistoryQueueFinished {
  static postUrlHistoryQueueFinished(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/history/`;
  }
  static readonly API_URL_HISTORY_QUEUE_FINISHED_FILTER =
    '?filter=LONGEST_FINISHED&pageSize=20&page=0';
}
