import { PageModalInProgessComponent } from '../page-modal-in-progess/page-modal-in-progess.component';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { PageModalItemsComponent } from '../page-modal-items/page-modal-items.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalYhonAcurioLimberIoC } from '../../domain/interface/status';
import { CommonModule } from '@angular/common';
import { TableItemsComponent } from '../table-items/table-items.component';
import { PageModalExecutedComponent } from '../page-modal-executed/page-modal-executed.component';
import { PageModalAllHistoryComponent } from '../page-modal-allhistory/page-modal-history.component';
import { StopQueueConsumerComponent } from '../stop-queue-consumers-button/stop-queue-consumers-button.component';

import {
  DataHistoryFinished,
  IHistoryFinished,
} from '../../domain/interface/history-queue-longest-finished';
import {
  DataHistoryProgress,
  IHistoryProgress,
} from '../../domain/interface/history-queue-longest-progress';
import { getHistoryUsecase } from '../../aplication/usecases/get-history.usecase/get-history.usecase';

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

  historyProgressClose: { [key: string]: IHistoryProgress[] } = {};
  historyFinishedClose: { [key: string]: IHistoryFinished[] } = {};

  @Input() queuesSummary: LocalYhonAcurioLimberIoC[] = [];
  @Input() filteredQueues: string[] = [];
  queue: string | undefined;
  selectedInterval: number = 30;
  private intervalId: any;

  private readonly getHistoryUsecase = inject(getHistoryUsecase);
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.executeLogicAtInterval();
    setTimeout(() => {
      this.init();
    }, 1000);
  }
  private init() {
    this.filteredQueues.forEach((queue) => {
      this.getHistoryUsecase
        .getHistoryProgress(queue)
        .subscribe((respuesta: { data: DataHistoryProgress[] }) => {
          this.historyProgressClose[queue] = [{ data: respuesta.data }];
        });

      this.getHistoryUsecase
        .getHistoryFinished(queue)
        .subscribe((respuesta: { data: DataHistoryFinished[] }) => {
          this.historyFinishedClose[queue] = [{ data: respuesta.data }];
        });
    });
  }
  private executeLogicAtInterval() {
    this.intervalId = setInterval(() => {
      this.historyProgressClose = {};
      this.historyFinishedClose = {};

      this.filteredQueues.forEach((queue) => {
        this.getHistoryUsecase
          .getHistoryProgress(queue)
          .subscribe((respuesta: { data: DataHistoryProgress[] }) => {
            this.historyProgressClose[queue] = [{ data: respuesta.data }];
          });

        this.getHistoryUsecase
          .getHistoryFinished(queue)
          .subscribe((respuesta: { data: DataHistoryFinished[] }) => {
            this.historyFinishedClose[queue] = [{ data: respuesta.data }];
          });
      });
    }, this.selectedInterval * 1000);
  }
  refreshData() {
    this.historyProgressClose = {};
    this.historyFinishedClose = {};
    this.filteredQueues.forEach((queue) => {
      this.getHistoryUsecase
        .getHistoryProgress(queue)
        .subscribe((respuesta: { data: DataHistoryProgress[] }) => {
          this.historyProgressClose[queue] = [{ data: respuesta.data }];
        });

      this.getHistoryUsecase
        .getHistoryFinished(queue)
        .subscribe((respuesta: { data: DataHistoryFinished[] }) => {
          this.historyFinishedClose[queue] = [{ data: respuesta.data }];
        });
    });
  }
  openModal(modalComponent: any, size: 'sm' | 'lg' | 'xl' = 'xl') {
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
