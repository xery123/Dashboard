import { Observable } from 'rxjs';
import { History } from '../../domain/history';

export interface getHistoryUsecase {
  handle(id: string): Observable<History>;
}
