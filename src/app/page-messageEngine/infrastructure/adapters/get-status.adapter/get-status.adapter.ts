import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStatus } from '../../../domain/interface/status';

import { postUrlStatus } from '../../environments/post-url.status';
import { Observable } from 'rxjs';
import { getStatusPort } from '../../../aplication/ports/get-status.port/get-status.port';
import { EnvironmentService } from '../../../../select environment/select-environment.service';

@Injectable({
  providedIn: 'root',
})
export class getStatusAdapter implements getStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  getStatus(): Observable<IStatus> {
    const apiUrl = postUrlStatus.postUrlStatus(this.EnvironmentService);
    console.log('get status');
    return this.http.get<IStatus>(apiUrl);
  }
}
