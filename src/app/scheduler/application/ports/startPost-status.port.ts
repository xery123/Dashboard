import { Observable } from 'rxjs';

export interface startStatusPort {
  execute(jobId: string): Observable<any>;
}
