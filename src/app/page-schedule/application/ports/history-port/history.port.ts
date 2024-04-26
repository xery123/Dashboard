import { Observable } from 'rxjs';
import { IHistory } from '../../../domain/interfaces/history';

export interface IHistoryPort {
  getId(id: string): Observable<IHistory>;
}
