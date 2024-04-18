import { Observable } from 'rxjs';
import { IStatus } from '../../../../domain/interfaces/status';

export interface IGetStatusPort {
	getStatus(): Observable<IStatus>;
}
