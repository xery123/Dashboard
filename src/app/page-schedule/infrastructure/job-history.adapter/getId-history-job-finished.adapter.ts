import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHistoryJobFinished } from '../../domain/interfaces/historyJobFinished';
import { postUrlHistoryJobFinished } from '../environments/post-url.HistoryJobFinished';
import { IHistoryJobFinishedPort } from '../../application/ports/history-port/history-job-finished.port';
import { EnvironmentService } from '../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class getidHistoryFinishedAdapter implements IHistoryJobFinishedPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  getIdFinished(id: string): Observable<IHistoryJobFinished> {
    const apiUrl = postUrlHistoryJobFinished.postUrlHistoryJobFinished(
      this.EnvironmentService
    );
    const filter =
      postUrlHistoryJobFinished.API_URL_HISTORY_JOB_FINISHED_FILTER;
    const url = `${apiUrl}${id}${filter}`;
    console.log('get history');
    return this.http.get<IHistoryJobFinished>(url);
  }
}
