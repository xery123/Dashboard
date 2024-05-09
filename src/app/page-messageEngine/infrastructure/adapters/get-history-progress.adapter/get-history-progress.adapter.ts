import { postUrlHistoryQueueProgress } from '../../environments/post-url.historyQueueProgress';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHistoryProgress } from '../../../domain/interface/history-queue-longest-progress';
import { getHistoryProgressPort } from '../../../aplication/ports/get-history.port/get-history-progress.port';

@Injectable({
  providedIn: 'root',
})
export class getHistoryProgressAdapter implements getHistoryProgressPort {
  constructor(private http: HttpClient) {}

  getHistoryProgress(id: string): Observable<IHistoryProgress> {
    const apiUrl = postUrlHistoryQueueProgress.API_URL_HISTORY_QUEUE_PROGRESS;
    const apiUrlFilter =
      postUrlHistoryQueueProgress.API_URL_HISTORY_QUEUE_PROGRESS_FILTER;
    const url = `${apiUrl}${id}${apiUrlFilter}`;
    console.log('get historyProgress');
    return this.http.get<IHistoryProgress>(url);
  }
}
