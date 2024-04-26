import { environment } from '../../../../environments/environment';

export class postUrlHistoryJobFinished {
  static readonly API_URL_HISTORY_JOB_FINISHED = `${environment.ENVIRONMENT}/api/v4/jobs/scheduler/history/`;
  static readonly API_URL_HISTORY_JOB_FINISHED_FILTER =
    '?filter=LONGEST_FINISHED&pageSize=20&page=0';
}
