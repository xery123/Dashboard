import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStatus } from '../../../domain/interface/status';

import { postUrlStatus } from '../../environments/post-url.status';
import { Observable } from 'rxjs';
import { getStatusPort } from '../../../aplication/ports/get-status.port/get-status.port';

@Injectable({
  providedIn: 'root',
})
export class getStatusAdapter implements getStatusPort {
  constructor(private http: HttpClient) {}

  getStatus(): Observable<IStatus> {
    const apiUrl = postUrlStatus.API_URL_STATUS;
    console.log('get status');
    return this.http.get<IStatus>(apiUrl);
  }
}
