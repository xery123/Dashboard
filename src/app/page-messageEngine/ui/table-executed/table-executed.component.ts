import { Component, Input } from '@angular/core';
import { DataHistoryFinished } from '../../domain/interface/history-queue-longest-finished';

import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';

@Component({
  selector: 'app-table-executed',
  standalone: true,
  templateUrl: './table-executed.component.html',
  styleUrl: './table-executed.component.css',
  imports: [MillisecondsToTimePipe],
})
export class TableExecutedComponent {
  @Input()
  queue: string | undefined;

  @Input()
  historyFinished: DataHistoryFinished[] | undefined;
}
