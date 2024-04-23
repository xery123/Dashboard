import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TokenService } from '../token';
import { IStatus } from '../../domain/interfaces/status';
import { IGetStatusPort } from '../../application/ports/status-port/get-status.port/get-status.port';
import { IApiStatus } from '../models/status-api.model';
import { postUrlStatus } from '../post-url.Status';

@Injectable({
  providedIn: 'root',
})
export class getStatusAdapter implements IGetStatusPort {
  constructor(private http: HttpClient) {}

  getStatus(): Observable<IStatus> {
    const token = TokenService.TOKEN;
    const apiUrl = postUrlStatus.API_URL_STATUS;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    console.log('get status');
    return this.http
      .get<IApiStatus>(apiUrl, { headers })
      .pipe(map((response) => ({ data: response.data })));
  }
}
