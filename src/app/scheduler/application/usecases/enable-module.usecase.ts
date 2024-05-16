import { Observable } from 'rxjs';

export interface enableModuleUsecase {
  handle(jobId: string): Observable<any>;
}
