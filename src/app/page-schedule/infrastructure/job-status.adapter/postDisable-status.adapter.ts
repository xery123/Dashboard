import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { IDisableStatusPort } from '../../application/ports/status-port/enable-disable.port/disablePost-status.port';

@Injectable({
  providedIn: 'root',
})
export class postDisableStatusAdapter implements IDisableStatusPort {
  constructor(private http: HttpClient) {}

  disableJob(jobId: string): Observable<any> {
    const apiUrl = postUrlButtons.API_URL_BUTTONS;
    const url = `${apiUrl}disable/${jobId}`;
    console.log('get disable');
    return this.http.get(url);
  }
}
