import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

type EnvironmentName = 'test' | 'app';

interface EnvironmentUrl {
  [key: string]: string[];
}

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  a: string = '';
  private _selectedApiUrl: string = '';
  private _availableUrls: { name: EnvironmentName; url: string }[] = [];

  constructor() {
    const envStrings: EnvironmentUrl = environment.API_URL_ENVIRONMENT;

    for (const [name, urls] of Object.entries(envStrings)) {
      urls.forEach((url: string) => {
        this._availableUrls.push({ name: name as EnvironmentName, url });
      });
    }

    this._selectedApiUrl = this._availableUrls[0]?.url || '';
  }

  get selectedApiUrl() {
    return this._selectedApiUrl;
  }

  set selectedApiUrl(url: string) {
    this._selectedApiUrl = url;
  }

  get availableUrls() {
    return this._availableUrls;
  }
}
