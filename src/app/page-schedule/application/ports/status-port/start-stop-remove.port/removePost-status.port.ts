import { Observable } from 'rxjs';

export interface IRemoveStatusPort {
	removeJob(jobId: string): Observable<any>;
}
