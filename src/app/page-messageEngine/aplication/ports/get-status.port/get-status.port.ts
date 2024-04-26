import { Observable } from 'rxjs';
import { IStatus } from '../../../domain/interface/status';

export interface getStatusPort {
  getStatus(): Observable<IStatus>;
}
