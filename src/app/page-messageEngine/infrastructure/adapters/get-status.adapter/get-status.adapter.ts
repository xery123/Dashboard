import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IStatus } from '../../../domain/interface/status';

import { postUrlStatus } from '../../post-url.status';
import { TokenService } from '../../token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class getStatusAdapter {
  constructor(private http: HttpClient) {}

  getStatus(): Observable<IStatus> {
    const token = TokenService.TOKEN;
    const apiUrl = postUrlStatus.API_URL_STATUS;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('get status');
    return this.http.get<IStatus>(apiUrl, { headers });
  }
}
