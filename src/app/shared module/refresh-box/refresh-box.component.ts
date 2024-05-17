import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-refresh-box',
  templateUrl: './refresh-box.component.html',
  styleUrls: ['./refresh-box.component.css'],
})
export class RefreshBoxComponent {
  @Output() refreshClick = new EventEmitter();
}
