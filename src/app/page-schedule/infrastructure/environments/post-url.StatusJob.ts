import { environment } from '../../../environments/environment.prod';

export class postUrlStatusJob {
  static readonly API_URL_STATUS_JOB = `${environment.API_URL_ENVIRONMENT}/api/v4/jobs/scheduler/status/`;
}
