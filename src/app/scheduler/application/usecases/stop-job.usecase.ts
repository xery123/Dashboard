import { Observable } from 'rxjs';

export interface stopUsecase {
  handle(jobId: string): Observable<any>;
}
