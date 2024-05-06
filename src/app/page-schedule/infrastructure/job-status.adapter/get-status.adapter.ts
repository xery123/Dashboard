import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IStatus } from '../../domain/interfaces/status';
import { IGetStatusPort } from '../../application/ports/status-port/get-status.port/get-status.port';
import { IApiStatus } from '../models/status-api.model';
import { postUrlStatus } from '../environments/post-url.Status';

@Injectable({
  providedIn: 'root',
})
export class getStatusAdapter implements IGetStatusPort {
  constructor(private http: HttpClient) {}

  getStatus(): Observable<IStatus> {
    const apiUrl = postUrlStatus.API_URL_STATUS;
    console.log('get status');
    return this.http
      .get<IApiStatus>(apiUrl)
      .pipe(map((response) => ({ data: response.data })));
  }
}
