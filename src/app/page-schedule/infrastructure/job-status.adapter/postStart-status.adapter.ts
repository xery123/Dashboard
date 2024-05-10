import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { IStartStatusPort } from '../../application/ports/status-port/start-stop-remove.port/startPost-status.port';
import { EnvironmentService } from '../../../select environment/select-environment.service';
@Injectable({
  providedIn: 'root',
})
export class postStartStatusAdapter implements IStartStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}
  startJob(jobId: string): Observable<any> {
    const apiUrl = postUrlButtons.postUrlButtons(this.EnvironmentService);
    const url = `${apiUrl}start/${jobId}`;
    console.log('get start');
    return this.http.get(url);
  }
}
