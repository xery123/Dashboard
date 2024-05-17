import { Component, Input } from '@angular/core';
import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';
import { CommonModule } from '@angular/common';
import { HistoryEntitie } from '../../domain/entities/history';

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
  historyAll: HistoryEntitie[] | undefined;
}
