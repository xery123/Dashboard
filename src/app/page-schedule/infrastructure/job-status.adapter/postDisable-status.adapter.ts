import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlService } from '../post-url';
import { TokenService } from '../token';
import { IDisableStatusPort } from '../../application/ports/status-port/enable-disable.port/disablePost-status.port';

@Injectable({
  providedIn: 'root'
})
export class postDisableStatusAdapter implements IDisableStatusPort {

  constructor(private http: HttpClient,
    private postUrlService: postUrlService,
    private tokenService: TokenService
  ) { }

  disableJob(jobId: string): Observable<any> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = this.postUrlService.getPostUrl();
    const url = `${apiUrl}/disable/${jobId}`;
    return this.http.get(url,{ headers });
  }
}
