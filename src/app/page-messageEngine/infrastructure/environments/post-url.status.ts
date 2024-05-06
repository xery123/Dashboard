import { environment } from '../../../../environments/environment.development';

export class postUrlStatus {
  static readonly API_URL_STATUS = `${environment.API_URL_ENVIRONMENT}/api/v4/jobs/messenger/status`;
}
