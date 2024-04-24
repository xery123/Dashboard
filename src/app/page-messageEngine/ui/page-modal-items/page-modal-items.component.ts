import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableItemsComponent } from '../table-items/table-items.component';
import { HttpClient } from '@angular/common/http';
import { getStatusQueueAdapter } from '../../infrastructure/adapters/get-status-queue.adapter/get-status-queue.adapter';
import { Item } from '../../domain/interface/status-queue';
import { CommonModule } from '@angular/common';
import { StopQueueConsumerComponent } from '../stop-queue-consumers-button/stop-queue-consumers-button.component';

@Component({
  selector: 'app-page-modal-items',
  standalone: true,
  templateUrl: './page-modal-items.component.html',
  styleUrl: './page-modal-items.component.css',
  imports: [TableItemsComponent, CommonModule, StopQueueConsumerComponent],
})
export class PageModalItemsComponent implements OnInit {
  @Input()
  queue: string | undefined;

  statusQueue: Item[] | undefined;

  activeModal = inject(NgbActiveModal);

  private readonly getStatusQueueAdapter = inject(getStatusQueueAdapter);

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    if (this.queue) {
      this.getStatusQueueAdapter
        .getStatusQueue(this.queue)
        .subscribe((respuesta) => (this.statusQueue = respuesta.data.items));
    }
    this.stopQueueConsumer();
  }
  stopQueueConsumer() {
    if (this.queue) {
      this.getStatusQueueAdapter
        .getStatusQueue(this.queue)
        .subscribe((respuesta) => (this.statusQueue = respuesta.data.items));
    }
  }
}
