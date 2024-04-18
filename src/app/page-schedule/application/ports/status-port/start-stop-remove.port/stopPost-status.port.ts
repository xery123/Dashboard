import { Observable } from 'rxjs';

export interface IStopStatusPort {
	stopJob(jobId: string): Observable<any>;
}
