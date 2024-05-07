import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHistoryJobProgress } from '../../domain/interfaces/historyJobProgress';
import { postUrlHistoryJobProgresss } from '../environments/post-url.HistoryJobProgress';
import { IHistoryJobProgressPort } from '../../application/ports/history-port/history-job-progress.port';

@Injectable({
  providedIn: 'root',
})
export class getidHistoryProgressAdapter implements IHistoryJobProgressPort {
  constructor(private http: HttpClient) {}

  getIdProgress(id: string): Observable<IHistoryJobProgress> {
    const apiUrl = postUrlHistoryJobProgresss.API_URL_HISTORY_JOB_PROGRESS;
    const filter =
      postUrlHistoryJobProgresss.API_URL_HISTORY_JOB_PROGRESS_FILTER;
    const url = `${apiUrl}${id}${filter}`;
    console.log('get history');
    return this.http.get<IHistoryJobProgress>(url);
  }
}