import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';
import { HistoryEntitie } from '../../domain/entities/history';

@Component({
  selector: 'app-table-history-finished',
  standalone: true,
  templateUrl: './job-history-finished.table.component.html',
  styleUrl: './job-history-finished.table.component.css',
  imports: [CommonModule, MillisecondsToTimePipe],
})
export class TableHistoryFinishedComponent {
  @Input()
  historyFinished: HistoryEntitie[] | undefined;

  @Input()
  idName: string | undefined;

  showErrorDetails = false;
}
