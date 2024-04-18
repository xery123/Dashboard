import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../token';
import { IHistoryPort } from '../../application/ports/history-port/history-port';

@Injectable({
  providedIn: 'root'
})
export class getidHistoryAdapter implements IHistoryPort {

  private URL_HISTORY = 'https://testactors2.limber.io/api/v4/jobs/scheduler/history/';

  constructor(private http: HttpClient,private tokenService: TokenService) {
    console.log('historyService');
  }

  getId(id: string) {
    return `${this.URL_HISTORY}${id}`
  }

}
