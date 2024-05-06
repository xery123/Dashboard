import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { IStartAllStatusPort } from '../../application/ports/status-port/start-stop-remove.port/startAllPost-status.port';

@Injectable({
  providedIn: 'root',
})
export class postStartAllStatusAdapter implements IStartAllStatusPort {
  constructor(private http: HttpClient) {}

  startAllJob(): Observable<any> {
    const apiUrl = postUrlButtons.API_URL_BUTTONS;
    const url = `${apiUrl}start`;
    console.log('get startAll');
    return this.http.get(url);
  }
}
