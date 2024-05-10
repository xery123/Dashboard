import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHistoryFinished } from '../../../domain/interface/history-queue-longest-finished';
import { postUrlHistoryQueueFinished } from '../../environments/post-url.historyQueueFinished';
import { getHistoryFinishedPort } from '../../../aplication/ports/get-history.port/get-history-finished.port';
import { EnvironmentService } from '../../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class getHistoryFinishedAdapter implements getHistoryFinishedPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  getHistoryFinished(id: string): Observable<IHistoryFinished> {
    const apiUrl = postUrlHistoryQueueFinished.postUrlHistoryQueueFinished(
      this.EnvironmentService
    );
    const apiUrlFilter =
      postUrlHistoryQueueFinished.API_URL_HISTORY_QUEUE_FINISHED_FILTER;
    const url = `${apiUrl}${id}${apiUrlFilter}`;
    console.log('get historyFinished');
    return this.http.get<IHistoryFinished>(url);
  }
}
