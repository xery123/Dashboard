import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token';
import { IHistoryPort } from '../../application/ports/history-port/history-port';
import { IHistory } from '../../domain/interfaces/history';
import { Observable } from 'rxjs';
import { postUrlHistory } from '../post-url.History';

@Injectable({
  providedIn: 'root',
})
export class getidHistoryAdapter implements IHistoryPort {
  constructor(private http: HttpClient) {
    console.log('historyService');
  }

  getId(id: string): Observable<IHistory> {
    const apiUrl = postUrlHistory.API_URL_HISTORY;
    const url = `${apiUrl}${id}`;
    const token = TokenService.TOKEN;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('get statusJob');
    return this.http.get<IHistory>(url, { headers });
  }
}
