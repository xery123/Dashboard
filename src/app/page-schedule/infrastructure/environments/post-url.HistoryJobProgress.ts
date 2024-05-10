import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlHistoryJobProgresss {
  static postUrlHistoryJobProgresss(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/history/`;
  }

  static readonly API_URL_HISTORY_JOB_PROGRESS_FILTER =
    '?filter=LONGEST_IN_PROGRESS&page=0&pageSize=20';
}
