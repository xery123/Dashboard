import { Component, Input } from '@angular/core';
import { MillisecondsToTimePipe } from '../TimePipes/milisegundos-hhmmss';
import { CommonModule } from '@angular/common';
import { HistoryEntitie } from '../../domain/entities/history';

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
  historyProgress: HistoryEntitie[] | undefined;
}
