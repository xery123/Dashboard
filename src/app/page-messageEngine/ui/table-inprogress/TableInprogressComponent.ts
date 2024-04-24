import { Component, Input } from '@angular/core';
import { DataHistoryProgress } from '../../domain/interface/history-queue-longest-progress';
import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-inprogress',
  standalone: true,
  templateUrl: './table-inprogress.component.html',
  styleUrl: './table-inprogress.component.css',
  imports: [MillisecondsToTimePipe, CommonModule],
})
export class TableInprogressComponent {
  @Input()
  queue: string | undefined;

  @Input()
  historyProgress: DataHistoryProgress[] | undefined;
}
