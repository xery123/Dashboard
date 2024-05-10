import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlHistory {
  static postUrlHistory(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/history/`;
  }

  static readonly API_URL_HISTORY_FILTER = '?page=0&pageSize=100';
}
