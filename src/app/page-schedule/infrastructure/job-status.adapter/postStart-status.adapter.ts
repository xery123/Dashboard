import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../post-url.Buttons';
import { IStartStatusPort } from '../../application/ports/status-port/start-stop-remove.port/startPost-status.port';
import { TokenService } from '../token';

@Injectable({
  providedIn: 'root',
})
export class postStartStatusAdapter implements IStartStatusPort {
  constructor(private http: HttpClient) {}
  startJob(jobId: string): Observable<any> {
    const token = TokenService.TOKEN;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = postUrlButtons.API_URL_BUTTONS;
    const url = `${apiUrl}/start/${jobId}`;
    console.log('get start');
    return this.http.get(url, { headers });
  }
}
