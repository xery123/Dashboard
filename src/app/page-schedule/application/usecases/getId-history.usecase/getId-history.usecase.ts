import { HTTP_HISTORY_SERVICE } from '../../../infrastructure/providers/history-api.provider';
import { IHistoryPort } from '../../ports/history-port/history-port';
import { Inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class getIdHistoryUsecase {

  constructor(@Inject(HTTP_HISTORY_SERVICE) private historyApiService: IHistoryPort) {}

  getId(id: string):string {

		return this.historyApiService.getId(id);
	}

}
