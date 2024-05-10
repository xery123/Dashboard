import { EnvironmentService } from '../../../select environment/select-environment.service';

export class postUrlHistoryJobFinished {
  static postUrlHistoryJobFinished(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/history/`;
  }

  static readonly API_URL_HISTORY_JOB_FINISHED_FILTER =
    '?filter=LONGEST_FINISHED&pageSize=20&page=0';
}
