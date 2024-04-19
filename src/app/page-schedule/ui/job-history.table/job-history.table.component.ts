import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { History } from '../../domain/interfaces/history';
import { MillisecondsToTimePipe } from "../TimePipes/milisegundos-hhmmss";





@Component({
    selector: 'app-table-history',
    standalone: true,
    templateUrl: './job-history.table.component.html',
    styleUrl: './job-history.table.component.css',
    imports: [CommonModule, MillisecondsToTimePipe]
})
export class TableHistoryComponent {

  @Input()
   historyT: History[] | undefined;

   @Input()
   idName: string | undefined;

   showErrorDetails = false;
}
