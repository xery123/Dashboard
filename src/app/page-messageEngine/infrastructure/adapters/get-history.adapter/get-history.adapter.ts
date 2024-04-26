import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IHistoryQueue } from '../../../domain/interface/history-queue';
import { Observable } from 'rxjs';
import { postUrlHistoryQueue } from '../../environments/post-url.historyQueue';
import { TokenService } from '../../environments/token';
import { getHistoryPort } from '../../../aplication/ports/get-history.port/get-history.port';

@Injectable({
  providedIn: 'root',
})
export class getHistoryAdapter implements getHistoryPort {
  constructor(private http: HttpClient) {}

  getHistory(id: string): Observable<IHistoryQueue> {
    const apiUrl = postUrlHistoryQueue.API_URL_HISTORY_QUEUE;
    const apiUrlFilter = postUrlHistoryQueue.API_URL_HISTORY_QUEUE_FILTER;
    const url = `${apiUrl}${id}${apiUrlFilter}`;
    const token = TokenService.TOKEN;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('get statusQueue');
    return this.http.get<IHistoryQueue>(url, { headers });
  }
}
