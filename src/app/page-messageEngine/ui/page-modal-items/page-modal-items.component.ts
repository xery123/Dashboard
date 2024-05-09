import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableItemsComponent } from '../table-items/table-items.component';
import { Item } from '../../domain/interface/status-queue';
import { CommonModule } from '@angular/common';
import { StopQueueConsumerComponent } from '../stop-queue-consumers-button/stop-queue-consumers-button.component';
import { getStatusUsecase } from '../../aplication/usecases/get-status.usecase/get-status.usecase';

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

  private readonly getStatusUsecase = inject(getStatusUsecase);

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    if (this.queue) {
      this.getStatusUsecase
        .getStatusQueue(this.queue)
        .subscribe((respuesta) => (this.statusQueue = respuesta.data.items));
    }
  }

  refreshData() {
    if (this.queue) {
      this.getStatusUsecase
        .getStatusQueue(this.queue)
        .subscribe((respuesta) => (this.statusQueue = respuesta.data.items));
    }
  }
}
