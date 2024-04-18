import { Inject, Injectable } from '@angular/core';
import { HTTP_HISTORY_SERVICE as HTTP_HISTORY_GET_ID } from '../../infrastructure/providers/history-api.provider';
import { IHistoryPort } from '../ports/history-port/history-port';

@Injectable({
  providedIn: 'root'
})
export class getIdHistoryUsecase {

  constructor(@Inject(HTTP_HISTORY_GET_ID) private historyApiService: IHistoryPort) {}

  getId(id: string):string {

		return this.historyApiService.getId(id);
	}

}
