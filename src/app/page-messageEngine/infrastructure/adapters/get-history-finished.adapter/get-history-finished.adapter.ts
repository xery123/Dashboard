import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHistoryFinished } from '../../../domain/interface/history-queue-longest-finished';
import { postUrlHistoryQueueFinished } from '../../environments/post-url.historyQueueFinished';
import { getHistoryFinishedPort } from '../../../aplication/ports/get-history.port/get-history-finished.port';

@Injectable({
  providedIn: 'root',
})
export class getHistoryFinishedAdapter implements getHistoryFinishedPort {
  constructor(private http: HttpClient) {}

  getHistoryFinished(id: string): Observable<IHistoryFinished> {
    const apiUrl = postUrlHistoryQueueFinished.API_URL_HISTORY_QUEUE_FINISHED;
    const apiUrlFilter =
      postUrlHistoryQueueFinished.API_URL_HISTORY_QUEUE_FINISHED_FILTER;
    const url = `${apiUrl}${id}${apiUrlFilter}`;
    console.log('get historyFinished');
    return this.http.get<IHistoryFinished>(url);
  }
}
