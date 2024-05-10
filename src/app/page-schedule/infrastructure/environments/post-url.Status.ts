import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlStatus {
  static postUrlStatus(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/status`;
  }
}
