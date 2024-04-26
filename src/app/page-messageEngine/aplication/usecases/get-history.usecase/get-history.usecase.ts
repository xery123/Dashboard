import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHistoryFinished } from '../../../domain/interface/history-queue-longest-finished';
import { IHistoryProgress } from '../../../domain/interface/history-queue-longest-progress';
import { IHistoryQueue } from '../../../domain/interface/history-queue';
import { getHistoryFinishedPort } from '../../ports/get-history.port/get-history-finished.port';
import { getHistoryProgressPort } from '../../ports/get-history.port/get-history-progress.port';
import { getHistoryPort } from '../../ports/get-history.port/get-history.port';
import { HTTP_GET_HISTORY_FINISHED } from '../../../infrastructure/providers/get-history.provider/get-history-finished.provider';
import { HTTP_GET_HISTORY_PROGRESS } from '../../../infrastructure/providers/get-history.provider/get-history-progress.provider';
import { HTTP_GET_HISTORY } from '../../../infrastructure/providers/get-history.provider/get-history.provider';

@Injectable({
  providedIn: 'root',
})
export class getHistoryUsecase {
  constructor(
    @Inject(HTTP_GET_HISTORY_FINISHED)
    private getHistoryFinishedPort: getHistoryFinishedPort,
    @Inject(HTTP_GET_HISTORY_PROGRESS)
    private getHistoryProgressPort: getHistoryProgressPort,
    @Inject(HTTP_GET_HISTORY)
    private getHistoryPort: getHistoryPort
  ) {}

  getHistoryFinished(id: string): Observable<IHistoryFinished> {
    return this.getHistoryFinishedPort.getHistoryFinished(id);
  }

  getHistoryProgress(id: string): Observable<IHistoryProgress> {
    return this.getHistoryProgressPort.getHistoryProgress(id);
  }

  getHistory(id: string): Observable<IHistoryQueue> {
    return this.getHistoryPort.getHistory(id);
  }
}
