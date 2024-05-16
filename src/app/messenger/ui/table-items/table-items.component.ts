import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Status } from '../../domain/status';
import { FormsModule } from '@angular/forms';
import { Item } from '../../domain/status-queue';

@Component({
  selector: 'app-table-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-items.component.html',
  styleUrl: './table-items.component.css',
})
export class TableItemsComponent {
  constructor() {}
  @Input()
  queue: string | undefined;

  @Input()
  statusQueue: Item[] | undefined;
}