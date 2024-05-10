import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlStatusJob {
  static postUrlStatusJob(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/status/`;
  }
}
