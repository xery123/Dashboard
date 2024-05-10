import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { IDisableStatusPort } from '../../application/ports/status-port/enable-disable.port/disablePost-status.port';
import { EnvironmentService } from '../../../select environment/select-environment.service';
@Injectable({
  providedIn: 'root',
})
export class postDisableStatusAdapter implements IDisableStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  disableJob(jobId: string): Observable<any> {
    const apiUrl = postUrlButtons.postUrlButtons(this.EnvironmentService);
    const url = `${apiUrl}disable/${jobId}`;
    console.log('get disable');
    return this.http.get(url);
  }
}
