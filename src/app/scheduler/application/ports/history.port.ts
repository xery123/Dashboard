import { Observable } from 'rxjs';
import { History } from '../../domain/history';

export interface historyPort {
  execute(id: string): Observable<History>;
}
