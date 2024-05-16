import { Observable } from 'rxjs';

export interface removeUsecase {
  handle(jobId: string): Observable<any>;
}
