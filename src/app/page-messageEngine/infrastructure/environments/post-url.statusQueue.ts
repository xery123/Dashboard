import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlStatusQueue {
  static postUrlStatusQueue(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/status/`;
  }
}
