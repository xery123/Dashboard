import { environment } from '../../../../environments/environment';

export class postUrlStatus {
  static readonly API_URL_STATUS = `${environment.ENVIRONMENT}/api/v4/jobs/scheduler/status`;
}
