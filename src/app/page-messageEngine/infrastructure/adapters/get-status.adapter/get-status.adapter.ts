import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IStatus } from '../../../domain/interface/status';

import { postUrlStatus } from '../../environments/post-url.status';
import { TokenService } from '../../environments/token';
import { Observable } from 'rxjs';
import { getStatusPort } from '../../../aplication/ports/get-status.port/get-status.port';

@Injectable({
  providedIn: 'root',
})
export class getStatusAdapter implements getStatusPort {
  constructor(private http: HttpClient) {}

  getStatus(): Observable<IStatus> {
    const token = TokenService.TOKEN;
    const apiUrl = postUrlStatus.API_URL_STATUS;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('get status');
    return this.http.get<IStatus>(apiUrl, { headers });
  }
}
