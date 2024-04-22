import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlService } from '../post-url';
import { TokenService } from '../token';
import { IEnableStatusPort } from '../../application/ports/status-port/enable-disable.port/enablePost-status.port';

@Injectable({
  providedIn: 'root',
})
export class postEnableStatusAdapter implements IEnableStatusPort {
  constructor(
    private http: HttpClient,
    private postUrlService: postUrlService,
    private tokenService: TokenService
  ) {}

  enableJob(jobId: string): Observable<any> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = this.postUrlService.getPostUrl();
    const url = `${apiUrl}/enable/${jobId}`;
    console.log('get enable');
    return this.http.get(url, { headers });
  }
}
