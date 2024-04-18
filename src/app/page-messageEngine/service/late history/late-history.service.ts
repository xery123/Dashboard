import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LateHistoryService {


  private readonly URL_HISTORY_LATE = 'http://localhost:4200/assets/';

  http = inject(HttpClient);

  constructor() { console.log('historyLateService');}

  getId(id: string) {
    return `${this.URL_HISTORY_LATE}${id}_lateHistory.json`;
  }
}
