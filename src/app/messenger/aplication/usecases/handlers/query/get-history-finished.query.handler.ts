import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { getHistoryFinishedUsecase } from '../../get-history-finished.usecase';
import { HistoryFinished } from '../../../../domain/history-queue-longest-finished';
import { getHistoryFinishedPort } from '../../../ports/get-history-finished.port';
import { GET_HISTORY_FINISHED } from '../../../../infrastructure/adapters/get-history-finished.adapter';

@Injectable({
  providedIn: 'root',
})
export class GetHistoryFinishedQuery implements getHistoryFinishedUsecase {
  constructor(
    @Inject(GET_HISTORY_FINISHED)
    private getHistoryFinishedPort: getHistoryFinishedPort
  ) {}

  handle(id: string): Observable<HistoryFinished> {
    return this.getHistoryFinishedPort.execute(id);
  }
}

export const GET_HISTORY_FINISHED_USECASE =
  new InjectionToken<getHistoryFinishedUsecase>('getHistoryFinishedUsecase');

export const GET_HISTORY_FINISHED_PROVIDER_USECASE: Provider = {
  provide: GET_HISTORY_FINISHED_USECASE,
  useClass: GetHistoryFinishedQuery,
};
