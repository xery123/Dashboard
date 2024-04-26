import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { TokenService } from '../environments/token';
import { IEnableStatusPort } from '../../application/ports/status-port/enable-disable.port/enablePost-status.port';

@Injectable({
  providedIn: 'root',
})
export class postEnableStatusAdapter implements IEnableStatusPort {
  constructor(private http: HttpClient) {}

  enableJob(jobId: string): Observable<any> {
    const token = TokenService.TOKEN;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = postUrlButtons.API_URL_BUTTONS;
    const url = `${apiUrl}enable/${jobId}`;
    console.log('get enable');
    return this.http.get(url, { headers });
  }
}
