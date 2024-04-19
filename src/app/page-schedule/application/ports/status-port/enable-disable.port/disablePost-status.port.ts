import { Observable } from 'rxjs';

export interface IDisableStatusPort {
	disableJob(jobId: string): Observable<any>;
}
