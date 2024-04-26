import { environment } from '../../../../environments/environment';

export class postUrlStatusJob {
  static readonly API_URL_STATUS_JOB = `${environment.ENVIRONMENT}/api/v4/jobs/scheduler/status/`;
}
