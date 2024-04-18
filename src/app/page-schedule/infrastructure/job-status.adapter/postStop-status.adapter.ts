import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlService } from '../post-url';
import { IStopStatusPort } from '../../application/ports/status-port/start-stop-remove.port/stopPost-status.port';
import { TokenService } from '../token';

@Injectable({
  providedIn: 'root'
})
export class postStopStatusAdapter implements IStopStatusPort {


  constructor(private http: HttpClient,
    private postUrlService: postUrlService,
    private tokenService: TokenService
  ) { }
  stopJob(jobId: string): Observable<any> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = this.postUrlService.getPostUrl();
    const url = `${apiUrl}/stop/${jobId}`;
    return this.http.delete(url,{ headers });
  }
}
