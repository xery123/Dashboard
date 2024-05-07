import { Component, Input } from '@angular/core';
import { DataHistoryQueue } from '../../domain/interface/history-queue';
import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-history',
  standalone: true,
  templateUrl: './table-history.component.html',
  styleUrl: './table-history.component.css',
  imports: [MillisecondsToTimePipe, CommonModule],
})
export class TableHistoryComponent {
  @Input()
  queue: string | undefined;

  @Input()
  historyAll: DataHistoryQueue[] | undefined;
}
