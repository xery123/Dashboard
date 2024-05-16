import { Observable } from 'rxjs';

export interface disableModulePort {
  execute(jobId: string): Observable<any>;
}
