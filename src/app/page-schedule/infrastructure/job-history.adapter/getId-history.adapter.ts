import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHistoryPort } from '../../application/ports/history-port/history.port';
import { IHistory } from '../../domain/interfaces/history';
import { Observable } from 'rxjs';
import { postUrlHistory } from '../environments/post-url.History';
import { EnvironmentService } from '../../../select environment/select-environment.service';
@Injectable({
  providedIn: 'root',
})
export class getidHistoryAdapter implements IHistoryPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  getId(id: string): Observable<IHistory> {
    const apiUrl = postUrlHistory.postUrlHistory(this.EnvironmentService);
    const filter = postUrlHistory.API_URL_HISTORY_FILTER;
    const url = `${apiUrl}${id}${filter}`;
    console.log('get history');
    return this.http.get<IHistory>(url);
  }
}
