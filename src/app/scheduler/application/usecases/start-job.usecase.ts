import { Observable } from 'rxjs';

export interface startUsecase {
  handle(jobId: string): Observable<any>;
}
