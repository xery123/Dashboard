import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IStatus } from '../../domain/interfaces/status';
import { IGetStatusPort } from '../../application/ports/status-port/get-status.port/get-status.port';
import { IApiStatus } from '../models/status-api.model';
import { postUrlStatus } from '../environments/post-url.Status';
import { EnvironmentService } from '../../../select environment/select-environment.service';
@Injectable({
  providedIn: 'root',
})
export class getStatusAdapter implements IGetStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  getStatus(): Observable<IStatus> {
    const apiUrl = postUrlStatus.postUrlStatus(this.EnvironmentService);
    console.log('get status');
    return this.http
      .get<IApiStatus>(apiUrl)
      .pipe(map((response) => ({ data: response.data })));
  }
}
