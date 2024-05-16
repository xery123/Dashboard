import { Observable } from 'rxjs';

export interface stopUsecase {
  handle(id: string): Observable<any>;
}
