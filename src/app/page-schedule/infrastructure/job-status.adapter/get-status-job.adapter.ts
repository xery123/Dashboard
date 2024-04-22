import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../token';
import { IGetStatusJobPort } from '../../application/ports/status-port/get-status.port/get-status-job.port';
import { Observable } from 'rxjs';
import {
  IStatus,
  JobAsyncAggregateJobExecution1,
} from '../../domain/interfaces/status';
import { IStatusJob } from '../../domain/interfaces/statusJob';

@Injectable({
  providedIn: 'root',
})
export class getStatusJobAdapter implements IGetStatusJobPort {
  private URL_STATUS =
    'https://testactors2.limber.io/api/v4/jobs/scheduler/status/';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getStatusJob(id: string): Observable<JobAsyncAggregateJobExecution1> {
    const url = `${this.URL_STATUS}${id}`;
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('get statusJob');
    return this.http.get<JobAsyncAggregateJobExecution1>(url, { headers });
  }
}
