import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { History } from '../../domain/interfaces/history';
import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';
import { HistoryProgress } from '../../domain/interfaces/historyJobProgress';

@Component({
  selector: 'app-table-history-progress',
  standalone: true,
  templateUrl: './job-history-progress.table.component.html',
  styleUrl: './job-history-progress.table.component.css',
  imports: [CommonModule, MillisecondsToTimePipe],
})
export class TableHistoryProgressComponent {
  @Input()
  historyProgress: HistoryProgress[] | undefined;

  @Input()
  idName: string | undefined;

  showErrorDetails = false;
}
