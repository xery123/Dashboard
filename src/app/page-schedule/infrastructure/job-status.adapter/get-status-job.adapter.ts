import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGetStatusJobPort } from '../../application/ports/status-port/get-status.port/get-status-job.port';
import { Observable } from 'rxjs';
import { IStatusJob } from '../../domain/interfaces/statusJob';
import { postUrlStatusJob } from '../environments/post-url.StatusJob';
import { EnvironmentService } from '../../../select environment/select-environment.service';
@Injectable({
  providedIn: 'root',
})
export class getStatusJobAdapter implements IGetStatusJobPort {
  constructor(
    private http: HttpClient,
    private EnvironmentService: EnvironmentService
  ) {}

  getStatusJob(id: string): Observable<IStatusJob> {
    const apiUrl = postUrlStatusJob.postUrlStatusJob(this.EnvironmentService);
    const url = `${apiUrl}${id}`;
    console.log('get statusJob');
    return this.http.get<IStatusJob>(url);
  }
}
