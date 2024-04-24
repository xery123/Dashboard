import { PageModalInProgessComponent } from '../page-modal-in-progess/page-modal-in-progess.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageModalItemsComponent } from '../page-modal-items/page-modal-items.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LocalYhonAcurioLimberIoC } from '../../domain/interface/status';
import { CommonModule } from '@angular/common';
import { TableItemsComponent } from '../table-items/table-items.component';
import { PageModalExecutedComponent } from '../page-modal-executed/page-modal-executed.component';
import { PageModalAllHistoryComponent } from '../page-modal-allhistory/page-modal-history.component';
import { StopQueueConsumerComponent } from '../stop-queue-consumers-button/stop-queue-consumers-button.component';

@Component({
  selector: 'app-table-message-engine',
  standalone: true,
  templateUrl: './table-message-engine.component.html',
  styleUrl: './table-message-engine.component.css',
  imports: [CommonModule, TableItemsComponent, StopQueueConsumerComponent],
})
export class TableMessageEngineComponent {
  modalItemsComponent = PageModalItemsComponent;
  modalExecutedComponent = PageModalExecutedComponent;
  modalInProgressComponent = PageModalInProgessComponent;
  modalAllHistoryComponent = PageModalAllHistoryComponent;

  @Input() queuesSummary: LocalYhonAcurioLimberIoC[] = [];

  @Input() filteredQueues: string[] = [];

  queue: string | undefined;

  constructor(private modalService: NgbModal) {}

  openModal(modalComponent: any) {
    const modalRef = this.modalService.open(modalComponent, { size: 'lg' });
    modalRef.componentInstance.queue = this.queue;
  }

  handleQueueClick(queue: string, modalComponent: any) {
    this.queue = queue;
    this.openModal(modalComponent);
  }

  @Output() refreshStatuss = new EventEmitter<void>();

  onRefresh1() {
    this.refreshStatuss.emit();
  }
}
