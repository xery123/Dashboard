import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { History } from '../../domain/interfaces/history';


@Component({
  selector: 'app-table-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-history.table.component.html',
  styleUrl: './job-history.table.component.css'
})
export class TableHistoryComponent {

  @Input()
   historyT: History[] | undefined;

   @Input()
   idName: string | undefined;

}
