import { Observable } from 'rxjs';

export interface IEnableStatusPort {
	enableJob(jobId: string): Observable<any>;
}
