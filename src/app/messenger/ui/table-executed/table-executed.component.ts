import { Component, Input } from '@angular/core';
import { DataHistoryFinished } from '../../domain/history-queue-longest-finished';

import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-executed',
  standalone: true,
  templateUrl: './table-executed.component.html',
  styleUrl: './table-executed.component.css',
  imports: [MillisecondsToTimePipe, CommonModule],
})
export class TableExecutedComponent {
  @Input()
  queue: string | undefined;

  @Input()
  historyFinished: DataHistoryFinished[] | undefined;
}
