import { Observable } from "rxjs";
import { IStatus } from "../../../../domain/interfaces/status";

export interface IGetUpdatedStatusPort {
	getUpdatedStatus(): Observable<IStatus>;
}
