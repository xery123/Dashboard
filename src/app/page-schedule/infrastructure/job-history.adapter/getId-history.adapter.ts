import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHistoryPort } from '../../application/ports/history-port/history.port';
import { IHistory } from '../../domain/interfaces/history';
import { Observable } from 'rxjs';
import { postUrlHistory } from '../environments/post-url.History';

@Injectable({
  providedIn: 'root',
})
export class getidHistoryAdapter implements IHistoryPort {
  constructor(private http: HttpClient) {}

  getId(id: string): Observable<IHistory> {
    const apiUrl = postUrlHistory.API_URL_HISTORY;
    const filter = postUrlHistory.API_URL_HISTORY_FILTER;
    const url = `${apiUrl}${id}${filter}`;
    console.log('get history');
    return this.http.get<IHistory>(url);
  }
}
