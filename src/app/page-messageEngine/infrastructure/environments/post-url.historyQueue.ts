import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlHistoryQueue {
  static postUrlHistoryQueue(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/history/`;
  }
  static readonly API_URL_HISTORY_QUEUE_FILTER =
    '?filter=ALL&pageSize=100&page=0';
}
