import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlButtons {
  static postUrlButtons(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/`;
  }
}
