import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlService } from '../post-url';
import { IRemoveStatusPort } from '../../application/ports/status-port/start-stop-remove.port/removePost-status.port';
import { TokenService } from '../token';

@Injectable({
  providedIn: 'root'
})
export class postRemoveStatusAdapter implements IRemoveStatusPort{

  constructor(private http: HttpClient,
    private postUrlService: postUrlService,
    private tokenService: TokenService
  ) { }
  removeJob(jobId: string): Observable<any> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = this.postUrlService.getPostUrl();
    const url = `${apiUrl}/remove/${jobId}`;
    return this.http.get(url,{ headers });
  }
}
