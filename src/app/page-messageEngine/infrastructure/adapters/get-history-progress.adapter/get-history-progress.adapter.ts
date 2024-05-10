import { postUrlHistoryQueueProgress } from '../../environments/post-url.historyQueueProgress';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHistoryProgress } from '../../../domain/interface/history-queue-longest-progress';
import { getHistoryProgressPort } from '../../../aplication/ports/get-history.port/get-history-progress.port';
import { EnvironmentService } from '../../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class getHistoryProgressAdapter implements getHistoryProgressPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  getHistoryProgress(id: string): Observable<IHistoryProgress> {
    const apiUrl = postUrlHistoryQueueProgress.postUrlHistoryQueueProgress(
      this.EnvironmentService
    );
    const apiUrlFilter =
      postUrlHistoryQueueProgress.API_URL_HISTORY_QUEUE_PROGRESS_FILTER;
    const url = `${apiUrl}${id}${apiUrlFilter}`;
    console.log('get historyProgress');
    return this.http.get<IHistoryProgress>(url);
  }
}
