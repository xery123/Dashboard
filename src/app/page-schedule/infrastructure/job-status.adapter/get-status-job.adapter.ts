import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../token';
import { IGetStatusJobPort } from '../../application/ports/status-port/get-status.port/get-status-job.port';

@Injectable({
  providedIn: 'root'
})
export class getStatusJobAdapter implements IGetStatusJobPort{
  private  URL_STATUS = 'https://testactors2.limber.io/api/v4/jobs/scheduler/status/';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  getStatusJob(id: string) {
    return `${this.URL_STATUS}${id}`
  }
}
