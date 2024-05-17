import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';
import { HistoryEntitie } from '../../domain/entities/history';

@Component({
  selector: 'app-table-history',
  standalone: true,
  templateUrl: './job-history.table.component.html',
  styleUrl: './job-history.table.component.css',
  imports: [CommonModule, MillisecondsToTimePipe],
})
export class TableHistoryComponent {
  @Input()
  historyT: HistoryEntitie[] | undefined;

  @Input()
  idName: string | undefined;

  showErrorDetails = false;
}
