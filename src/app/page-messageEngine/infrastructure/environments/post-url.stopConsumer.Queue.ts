import { EnvironmentService } from '../../../select environment/select-environment.service';

export class PostUrlStopConsumerQueue {
  static PostUrlStopConsumerQueue(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/stop-consumers/`;
  }
}
