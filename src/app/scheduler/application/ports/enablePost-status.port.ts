import { Observable } from 'rxjs';

export interface enableModulePort {
  execute(jobId: string): Observable<any>;
}
