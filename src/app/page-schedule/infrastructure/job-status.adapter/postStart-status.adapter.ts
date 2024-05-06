import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { IStartStatusPort } from '../../application/ports/status-port/start-stop-remove.port/startPost-status.port';

@Injectable({
  providedIn: 'root',
})
export class postStartStatusAdapter implements IStartStatusPort {
  constructor(private http: HttpClient) {}
  startJob(jobId: string): Observable<any> {
    const apiUrl = postUrlButtons.API_URL_BUTTONS;
    const url = `${apiUrl}start/${jobId}`;
    console.log('get start');
    return this.http.get(url);
  }
}
