import { Observable } from 'rxjs';

import { IHistoryJobFinished } from '../../../domain/interfaces/historyJobFinished';

export interface IHistoryJobFinishedPort {
  getIdFinished(id: string): Observable<IHistoryJobFinished>;
}
