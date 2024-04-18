import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class postUrlService {
  private apiUrl = 'https://testactors2.limber.io/api/v4/jobs/scheduler';

  getPostUrl(): string {
    return this.apiUrl;
  }
}
