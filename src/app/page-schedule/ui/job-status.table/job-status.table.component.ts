import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryJobComponent } from '../job-history.page/job-history.page.component';

import { TableHistoryComponent } from '../job-history.table/job-history.table.component';
import {
  IStatus,
  JobAsyncAggregateJobExecution1,
} from '../../domain/interfaces/status';
import { EnableDisableJobComponent } from '../job-enable-disable-job/enable-disable-job.component';
import { StartStopRemoveJobComponent } from '../job-start-stop-remove-job/start-stop-remove-job.component';
import StatusJobComponent from '../job-status.page/job-status.page.component';
import { PageHistoryFinishedComponent } from '../job-history-finished.page/job-history-finished.component';
import { PageHistoryProgresssComponent } from '../job-history-progress.page/job-history-progress.component';
import {
  DataF,
  HistoryFinished,
  IHistoryJobFinished,
} from '../../domain/interfaces/historyJobFinished';
import {
  DataP,
  HistoryProgress,
  IHistoryJobProgress,
} from '../../domain/interfaces/historyJobProgress';
import { getIdHistoryUsecase } from '../../application/usecases/getId-history.usecase/getId-history.usecase';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './job-status.table.component.html',
  styleUrls: ['./job-status.table.component.css'],
  imports: [
    CommonModule,
    TableHistoryComponent,
    EnableDisableJobComponent,
    StartStopRemoveJobComponent,
    StatusJobComponent,
  ],
})
export class TableComponent implements OnInit {
  historyProgress: { [key: string]: DataP[] } = {};
  historyFinished: { [key: string]: DataF[] } = {};
  modalHistory = HistoryJobComponent;
  modalHistoryFinished = PageHistoryFinishedComponent;
  modalHistoryProgresss = PageHistoryProgresssComponent;
  @Input() jobsId: IStatus | undefined;
  @Input() jobs: { [key: string]: JobAsyncAggregateJobExecution1 } = {};
  idName: string | undefined;

  constructor(
    private getIdHistoryUsecase: getIdHistoryUsecase,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    Object.entries(this.jobs).forEach(([key, value]) => {
      this.getIdHistoryUsecase
        .getIdProgress(key)
        .subscribe((respuesta: IHistoryJobProgress) => {
          if (respuesta && respuesta.data) {
            if (!this.historyProgress[key]) {
              this.historyProgress[key] = [];
            }
            this.historyProgress[key].push(respuesta.data);
          }
        });

      this.getIdHistoryUsecase
        .getIdFinished(key)
        .subscribe((respuesta: IHistoryJobFinished) => {
          if (respuesta && respuesta.data) {
            if (!this.historyFinished[key]) {
              this.historyFinished[key] = [];
            }
            this.historyFinished[key].push(respuesta.data);
          }
        });
    });
  }
  openModal(modalComponent: any, size: 'sm' | 'lg' | 'xl' = 'lg') {
    const modalRef = this.modalService.open(modalComponent, { size });
    modalRef.componentInstance.idName = this.idName;
  }

  openModalItemsLarger() {
    this.openModal(HistoryJobComponent, 'lg');
  }

  handleQueueClick(idName: string, modalComponent: any) {
    this.idName = idName;
    if (modalComponent === HistoryJobComponent) {
      this.openModalItemsLarger();
    } else {
      this.openModal(modalComponent);
    }
  }

  @Output() refreshJob = new EventEmitter<void>();
  @Output() enableDisableJob = new EventEmitter<void>();

  onRefresh1() {
    this.refreshJob.emit();
  }

  onRefresh2() {
    this.enableDisableJob.emit();
  }
}
