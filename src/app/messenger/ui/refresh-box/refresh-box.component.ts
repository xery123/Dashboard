import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-refresh-box-messenger',
  standalone: true,
  imports: [],
  templateUrl: './refresh-box.component.html',
  styleUrl: './refresh-box.component.css',
})
export class RefreshBoxComponent {
  @Output() refreshClick = new EventEmitter();
}
