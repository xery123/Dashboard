import { Observable } from 'rxjs';

export interface IStartAllStatusPort {
	startAllJob(): Observable<any>;
}
