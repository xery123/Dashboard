import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlStartAllQueue {
  static postUrlStartAllQueue(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/`;
  }
}
