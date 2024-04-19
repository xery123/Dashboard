import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private readonly URL_HISTORY = 'http://localhost:55426/assets/';


  http = inject(HttpClient);

  constructor() { console.log('historyService');}

  getId(id: string) {
    return `${this.URL_HISTORY}${id}.json`;
  }
}
