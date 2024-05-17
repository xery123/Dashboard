import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';
import { HistoryEntitie } from '../../domain/entities/history';

@Component({
  selector: 'app-table-history-progress',
  standalone: true,
  templateUrl: './job-history-progress.table.component.html',
  styleUrl: './job-history-progress.table.component.css',
  imports: [CommonModule, MillisecondsToTimePipe],
})
export class TableHistoryProgressComponent {
  @Input()
  historyProgress: HistoryEntitie[] | undefined;

  @Input()
  idName: string | undefined;

  showErrorDetails = false;
}
