import { environment } from '../../../environments/environment.prod';

export class postUrlHistoryJobProgresss {
  static readonly API_URL_HISTORY_JOB_PROGRESS = `${environment.API_URL_ENVIRONMENT}/api/v4/jobs/scheduler/history/`;
  static readonly API_URL_HISTORY_JOB_PROGRESS_FILTER =
    '?filter=LONGEST_IN_PROGRESS&page=0&pageSize=20';
}
