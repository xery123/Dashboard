import { Observable } from 'rxjs';

export interface disableModuleUsecase {
  handle(jobId: string): Observable<any>;
}
