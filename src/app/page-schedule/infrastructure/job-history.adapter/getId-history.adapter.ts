import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token';
import { IHistoryPort } from '../../application/ports/history-port/history-port';
import { IHistory } from '../../domain/interfaces/history';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class getidHistoryAdapter implements IHistoryPort {
  private URL_HISTORY =
    'https://testactors2.limber.io/api/v4/jobs/scheduler/history/';

  constructor(private http: HttpClient, private tokenService: TokenService) {
    console.log('historyService');
  }

  getId(id: string): Observable<IHistory> {
    const url = `${this.URL_HISTORY}${id}`;
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('get statusJob');
    return this.http.get<IHistory>(url, { headers });
  }
}
