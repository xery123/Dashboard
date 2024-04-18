import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IMessage } from '../interface/message-items';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-table-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-items.component.html',
  styleUrl: './table-items.component.css'
})
export class TableItemsComponent {

  constructor() {
	}

  @Input()
  message: IMessage | undefined;;

  @Input()
  queue: string | undefined;

}
