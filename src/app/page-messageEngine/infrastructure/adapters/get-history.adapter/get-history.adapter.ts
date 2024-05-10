import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHistoryQueue } from '../../../domain/interface/history-queue';
import { Observable } from 'rxjs';
import { postUrlHistoryQueue } from '../../environments/post-url.historyQueue';
import { getHistoryPort } from '../../../aplication/ports/get-history.port/get-history.port';
import { EnvironmentService } from '../../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class getHistoryAdapter implements getHistoryPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  getHistory(id: string): Observable<IHistoryQueue> {
    const apiUrl = postUrlHistoryQueue.postUrlHistoryQueue(
      this.EnvironmentService
    );
    const apiUrlFilter = postUrlHistoryQueue.API_URL_HISTORY_QUEUE_FILTER;
    const url = `${apiUrl}${id}${apiUrlFilter}`;
    console.log('get history');
    return this.http.get<IHistoryQueue>(url);
  }
}
