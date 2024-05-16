import { Observable } from 'rxjs';

export interface startAllUsecase {
  handle(): Observable<any>;
}
