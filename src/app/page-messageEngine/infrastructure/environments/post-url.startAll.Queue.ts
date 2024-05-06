import { environment } from '../../../environments/environment.prod';

export class postUrlStartAllQueue {
  static readonly API_URL_START_ALL_QUEUE = `${environment.API_URL_ENVIRONMENT}/api/v4/jobs/messenger/`;
}
