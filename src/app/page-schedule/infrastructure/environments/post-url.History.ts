import { environment } from '../../../../environments/environment';

export class postUrlHistory {
  static readonly API_URL_HISTORY = `${environment.ENVIRONMENT}/api/v4/jobs/scheduler/history/`;
  static readonly API_URL_HISTORY_FILTER = '?page=0&pageSize=100';
}
