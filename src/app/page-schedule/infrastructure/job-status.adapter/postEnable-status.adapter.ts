import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { IEnableStatusPort } from '../../application/ports/status-port/enable-disable.port/enablePost-status.port';
import { EnvironmentService } from '../../../select environment/select-environment.service';
@Injectable({
  providedIn: 'root',
})
export class postEnableStatusAdapter implements IEnableStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  enableJob(jobId: string): Observable<any> {
    const apiUrl = postUrlButtons.postUrlButtons(this.EnvironmentService);
    const url = `${apiUrl}enable/${jobId}`;
    console.log('get enable');
    return this.http.get(url);
  }
}
