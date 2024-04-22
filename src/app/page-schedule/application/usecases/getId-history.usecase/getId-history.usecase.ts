import { Observable } from 'rxjs';
import { HTTP_HISTORY_SERVICE } from '../../../infrastructure/providers/history-api.provider';
import { IHistoryPort } from '../../ports/history-port/history-port';
import { Inject, Injectable } from '@angular/core';
import { IHistory } from '../../../domain/interfaces/history';

@Injectable({
  providedIn: 'root',
})
export class getIdHistoryUsecase {
  constructor(
    @Inject(HTTP_HISTORY_SERVICE) private historyApiService: IHistoryPort
  ) {}

  getId(id: string): Observable<IHistory> {
    return this.historyApiService.getId(id);
  }
}
