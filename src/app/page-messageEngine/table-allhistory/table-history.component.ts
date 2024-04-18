import { Component, Input } from '@angular/core';
import { Datum } from '../interface/history';
import { TimeDifferencePipe } from "../TimePipes/fecha-fecha";


@Component({
    selector: 'app-table-history',
    standalone: true,
    templateUrl: './table-history.component.html',
    styleUrl: './table-history.component.css',
    imports: [TimeDifferencePipe]
})
export class TableHistoryComponent {
  @Input()
  queue: string | undefined;

  @Input()
   historyT: Datum[] | undefined;
}
