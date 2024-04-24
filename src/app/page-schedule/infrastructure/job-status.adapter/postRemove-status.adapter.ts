import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../post-url.Buttons';
import { IRemoveStatusPort } from '../../application/ports/status-port/start-stop-remove.port/removePost-status.port';
import { TokenService } from '../token';

@Injectable({
  providedIn: 'root',
})
export class postRemoveStatusAdapter implements IRemoveStatusPort {
  constructor(private http: HttpClient) {}
  removeJob(jobId: string): Observable<any> {
    const token = TokenService.TOKEN;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const apiUrl = postUrlButtons.API_URL_BUTTONS;
    const url = `${apiUrl}remove/${jobId}`;
    console.log('get remove');
    return this.http.get(url, { headers });
  }
}
