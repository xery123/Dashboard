import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../post-url.Buttons';
import { IStopStatusPort } from '../../application/ports/status-port/start-stop-remove.port/stopPost-status.port';
import { TokenService } from '../token';

@Injectable({
  providedIn: 'root',
})
export class postStopStatusAdapter implements IStopStatusPort {
  constructor(private http: HttpClient) {}
  stopJob(jobId: string): Observable<any> {
    const token = TokenService.TOKEN;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = postUrlButtons.API_URL_BUTTONS;
    const url = `${apiUrl}/stop/${jobId}`;
    console.log('delete stop');
    return this.http.delete(url, { headers });
  }
}
