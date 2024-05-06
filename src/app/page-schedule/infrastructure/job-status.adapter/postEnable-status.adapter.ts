import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { IEnableStatusPort } from '../../application/ports/status-port/enable-disable.port/enablePost-status.port';

@Injectable({
  providedIn: 'root',
})
export class postEnableStatusAdapter implements IEnableStatusPort {
  constructor(private http: HttpClient) {}

  enableJob(jobId: string): Observable<any> {
    const apiUrl = postUrlButtons.API_URL_BUTTONS;
    const url = `${apiUrl}enable/${jobId}`;
    console.log('get enable');
    return this.http.get(url);
  }
}
