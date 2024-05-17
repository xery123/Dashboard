import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableItemsComponent } from '../table-items/table-items.component';
import { CommonModule } from '@angular/common';
import { StopQueueConsumerComponent } from '../stop-queue-consumers-button/stop-queue-consumers-button.component';
import { GET_STATUS_QUEUE_USECASE } from '../../aplication/usecases/handlers/query/get-status-queue.query.handler';
import { getStatusQueueUsecase } from '../../aplication/usecases/get-status-queue.query.handler';
import { Item } from '../../domain/entities/status-queue';

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

  constructor(
    private modalService: NgbModal,
    @Inject(GET_STATUS_QUEUE_USECASE)
    private getStatusQueueUsecase: getStatusQueueUsecase
  ) {}

  ngOnInit(): void {
    if (this.queue) {
      this.getStatusQueueUsecase
        .handle(this.queue)
        .subscribe((respuesta) => (this.statusQueue = respuesta.data.items));
    }
  }

  refreshData() {
    if (this.queue) {
      this.getStatusQueueUsecase
        .handle(this.queue)
        .subscribe((respuesta) => (this.statusQueue = respuesta.data.items));
    }
  }
}
