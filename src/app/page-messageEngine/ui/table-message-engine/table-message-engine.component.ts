import { PageModalInProgessComponent } from '../page-modal-in-progess/page-modal-in-progess.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageModalItemsComponent } from '../page-modal-items/page-modal-items.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalYhonAcurioLimberIoC } from '../../domain/interface/status';
import { CommonModule } from '@angular/common';
import { TableItemsComponent } from '../table-items/table-items.component';
import { PageModalExecutedComponent } from '../page-modal-executed/page-modal-executed.component';
import { PageModalAllHistoryComponent } from '../page-modal-allhistory/page-modal-history.component';
import { StopQueueConsumerComponent } from '../stop-queue-consumers-button/stop-queue-consumers-button.component';
import { getHistoryProgressAdapter } from '../../infrastructure/adapters/get-history-progress.adapter/get-history-progress.adapter';
import { getHistoryFinishedAdapter } from '../../infrastructure/adapters/get-history-finished.adapter/get-history-finished.adapter';
import {
  DataHistoryFinished,
  IHistoryFinished,
} from '../../domain/interface/history-queue-longest-finished';
import {
  DataHistoryProgress,
  IHistoryProgress,
} from '../../domain/interface/history-queue-longest-progress';

@Component({
  selector: 'app-table-message-engine',
  standalone: true,
  templateUrl: './table-message-engine.component.html',
  styleUrls: ['./table-message-engine.component.css'],
  imports: [CommonModule, TableItemsComponent, StopQueueConsumerComponent],
})
export class TableMessageEngineComponent implements OnInit {
  modalItemsComponent = PageModalItemsComponent;
  modalExecutedComponent = PageModalExecutedComponent;
  modalInProgressComponent = PageModalInProgessComponent;
  modalAllHistoryComponent = PageModalAllHistoryComponent;

  historyProgressClose: DataHistoryProgress[] = [];
  historyFinishedClose: DataHistoryFinished[] = [];

  @Input() queuesSummary: LocalYhonAcurioLimberIoC[] = [];
  @Input() filteredQueues: string[] = [];
  queue: string | undefined;

  constructor(
    private getHistoryProgressAdapter: getHistoryProgressAdapter,
    private getHistoryFinishedAdapter: getHistoryFinishedAdapter,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.filteredQueues.forEach((queue) => {
      this.getHistoryProgressAdapter
        .getHistoryProgress(queue)
        .subscribe((respuesta: IHistoryProgress) => {
          this.historyProgressClose.push(...respuesta.data);
        });

      this.getHistoryFinishedAdapter
        .getHistoryFinished(queue)
        .subscribe((respuesta: IHistoryFinished) => {
          this.historyFinishedClose.push(...respuesta.data);
        });
    });
  }

  openModal(modalComponent: any, size: 'sm' | 'lg' | 'xl' = 'lg') {
    const modalRef = this.modalService.open(modalComponent, { size });
    modalRef.componentInstance.queue = this.queue;
  }

  openModalItemsLarger() {
    this.openModal(PageModalItemsComponent, 'xl');
  }

  handleQueueClick(queue: string, modalComponent: any) {
    this.queue = queue;
    if (modalComponent === PageModalItemsComponent) {
      this.openModalItemsLarger();
    } else {
      this.openModal(modalComponent);
    }
  }

  @Output() refreshStatuss = new EventEmitter<void>();

  onRefresh1() {
    this.refreshStatuss.emit();
  }
}
