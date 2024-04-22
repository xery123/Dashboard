import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TokenService } from '../token';
import { IStatus } from '../../domain/interfaces/status';
import { IGetStatusPort } from '../../application/ports/status-port/get-status.port/get-status.port';
import { IApiStatus } from '../models/status-api.model';

@Injectable({
  providedIn: 'root',
})
export class getStatusAdapter implements IGetStatusPort {
  private readonly URL_STATUS =
    'https://testactors2.limber.io/api/v4/jobs/scheduler/status';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getStatus(): Observable<IStatus> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    console.log('get status');
    return this.http
      .get<IApiStatus>(this.URL_STATUS, { headers })
      .pipe(map((response) => ({ data: response.data })));
  }
}
