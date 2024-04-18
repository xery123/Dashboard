import { Component, Input } from '@angular/core';
import { DatumP } from '../interface/historyP';
import { TimeSinceDatePipe } from "../TimePipes/fecha-actual";



@Component({
    selector: 'app-table-inprogress',
    standalone: true,
    templateUrl: './table-inprogress.component.html',
    styleUrl: './table-inprogress.component.css',
    imports: [TimeSinceDatePipe]
})
export class TableInprogressComponent {
  @Input()
  queue: string | undefined;

  @Input()
  historyP: DatumP[] | undefined;
}
