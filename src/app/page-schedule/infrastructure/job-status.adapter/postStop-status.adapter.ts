import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { IStopStatusPort } from '../../application/ports/status-port/start-stop-remove.port/stopPost-status.port';
import { EnvironmentService } from '../../../select environment/select-environment.service';
@Injectable({
  providedIn: 'root',
})
export class postStopStatusAdapter implements IStopStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}
  stopJob(jobId: string): Observable<any> {
    const apiUrl = postUrlButtons.postUrlButtons(this.EnvironmentService);
    const url = `${apiUrl}stop/${jobId}`;
    console.log('delete stop');
    return this.http.delete(url);
  }
}
