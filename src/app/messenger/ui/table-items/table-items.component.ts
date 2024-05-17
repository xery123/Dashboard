import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from '../../domain/entities/status-queue';

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
