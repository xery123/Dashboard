import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { postUrlButtons } from '../environments/post-url.Buttons';
import { IRemoveStatusPort } from '../../application/ports/status-port/start-stop-remove.port/removePost-status.port';
import { EnvironmentService } from '../../../select environment/select-environment.service';
@Injectable({
  providedIn: 'root',
})
export class postRemoveStatusAdapter implements IRemoveStatusPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}
  removeJob(jobId: string): Observable<any> {
    const apiUrl = postUrlButtons.postUrlButtons(this.EnvironmentService);
    const url = `${apiUrl}remove/${jobId}`;
    console.log('get remove');
    return this.http.get(url);
  }
}
