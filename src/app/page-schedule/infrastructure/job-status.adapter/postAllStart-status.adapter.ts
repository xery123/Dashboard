import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlService } from '../post-url';
import { IStartAllStatusPort } from '../../application/ports/status-port/start-stop-remove.port/startAllPost-status.port';
import { TokenService } from '../token';

@Injectable({
  providedIn: 'root'
})
export class postStartAllStatusAdapter implements IStartAllStatusPort{

  constructor(private http: HttpClient,
    private postUrlService: postUrlService,
    private tokenService: TokenService
  ) { }
  startAllJob(): Observable<any> {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = this.postUrlService.getPostUrl();
    const url = `${apiUrl}/start`;
    return this.http.get(url,{ headers });
  }
}
