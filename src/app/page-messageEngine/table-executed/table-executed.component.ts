import { Component, Input } from '@angular/core';
import { DatumE } from '../interface/historyE';

import { SecondsToTimePipe } from "../TimePipes/segundos-hhmmss";

@Component({
    selector: 'app-table-executed',
    standalone: true,
    templateUrl: './table-executed.component.html',
    styleUrl: './table-executed.component.css',
    imports: [ SecondsToTimePipe]
})
export class TableExecutedComponent {
  @Input()
  queue: string | undefined;

  @Input()
   historyE: DatumE[] | undefined;

}
