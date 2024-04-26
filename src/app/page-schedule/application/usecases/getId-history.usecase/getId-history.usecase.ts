import { Observable } from 'rxjs';
import { HTTP_HISTORY_SERVICE } from '../../../infrastructure/providers/get-history-api.provider';
import { IHistoryPort } from '../../ports/history-port/history.port';
import { Inject, Injectable } from '@angular/core';
import { IHistory } from '../../../domain/interfaces/history';
import { IHistoryJobProgress } from '../../../domain/interfaces/historyJobProgress';
import { IHistoryJobFinished } from '../../../domain/interfaces/historyJobFinished';
import { IHistoryJobProgressPort } from '../../ports/history-port/history-job-progress.port';
import { IHistoryJobFinishedPort } from '../../ports/history-port/history-job-finished.port';
import { HTTP_HISTORY_JOB_FINISHED_SERVICE } from '../../../infrastructure/providers/get-history-job-finished-api.provider';
import { HTTP_HISTORY_JOB_PROGRESS_SERVICE } from '../../../infrastructure/providers/get-history-job-progress-api.provider';

@Injectable({
  providedIn: 'root',
})
export class getIdHistoryUsecase {
  constructor(
    @Inject(HTTP_HISTORY_SERVICE) private IHistoryPort: IHistoryPort,
    @Inject(HTTP_HISTORY_JOB_FINISHED_SERVICE)
    private IHistoryJobFinishedPort: IHistoryJobFinishedPort,
    @Inject(HTTP_HISTORY_JOB_PROGRESS_SERVICE)
    private IHistoryJobProgressPort: IHistoryJobProgressPort
  ) {}

  getId(id: string): Observable<IHistory> {
    return this.IHistoryPort.getId(id);
  }
  getIdProgress(id: string): Observable<IHistoryJobProgress> {
    return this.IHistoryJobProgressPort.getIdProgress(id);
  }
  getIdFinished(id: string): Observable<IHistoryJobFinished> {
    return this.IHistoryJobFinishedPort.getIdFinished(id);
  }
}
