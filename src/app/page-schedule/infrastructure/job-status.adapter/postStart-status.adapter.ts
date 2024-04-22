import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlService } from '../post-url';
import { IStartStatusPort } from '../../application/ports/status-port/start-stop-remove.port/startPost-status.port';
import { TokenService } from '../token';

@Injectable({
  providedIn: 'root',
})
export class postStartStatusAdapter implements IStartStatusPort {
  constructor(
    private http: HttpClient,
    private postUrlService: postUrlService,
    private tokenService: TokenService
  ) {}
  startJob(jobId: string): Observable<any> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = this.postUrlService.getPostUrl();
    const url = `${apiUrl}/start/${jobId}`;
    console.log('get start');
    return this.http.get(url, { headers });
  }
}
