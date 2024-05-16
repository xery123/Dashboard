import { Observable } from 'rxjs';

export interface removeStatusPort {
  execute(jobId: string): Observable<any>;
}
