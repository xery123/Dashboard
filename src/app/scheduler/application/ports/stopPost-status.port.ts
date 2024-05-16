import { Observable } from 'rxjs';

export interface stopStatusPort {
  execute(jobId: string): Observable<any>;
}
