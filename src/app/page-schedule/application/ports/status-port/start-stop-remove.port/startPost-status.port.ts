import { Observable } from 'rxjs';

export interface IStartStatusPort {
	startJob(jobId: string): Observable<any>;
}
