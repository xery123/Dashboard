import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TokenService } from '../token';

@Injectable({
  providedIn: 'root'
})
export class ProgressHistoryService {


  private readonly URL_HISTORY_PROGRESS = 'http://localhost:4200/assets/';

  http = inject(HttpClient);

  constructor() { console.log('historyProgressService');}

  getId(id: string) {
    return `${this.URL_HISTORY_PROGRESS}${id}_progressHistory.json`;
  }
}
