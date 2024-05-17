import { Component } from '@angular/core';
import { EnvironmentService } from '../../select environment/select-environment.service';

interface UrlObject {
  name: 'test' | 'app';
  url: string;
}

@Component({
  selector: 'app-selected-api-box',
  templateUrl: './selected-api-box.component.html',
  styleUrls: ['./selected-api-box.component.css'],
})
export class SelectedApiBoxComponent {
  selectedUrlString: string;
  selectedUrl: UrlObject | null = null;
  availableUrls: UrlObject[];

  constructor(private environmentService: EnvironmentService) {
    this.availableUrls = environmentService.availableUrls.map(
      ({ name, url }) => ({ name, url })
    );
    const selectedUrl = this.availableUrls.find(
      (url) => url.url === environmentService.selectedApiUrl
    );
    this.selectedUrlString = selectedUrl ? selectedUrl.url : '';
    this.selectedUrl = selectedUrl || null;
  }

  onUrlChange(url: string) {
    this.environmentService.selectedApiUrl = url;
    this.selectedUrlString = url;
    this.selectedUrl =
      this.availableUrls.find((urlObj) => urlObj.url === url) || null;
  }
}
