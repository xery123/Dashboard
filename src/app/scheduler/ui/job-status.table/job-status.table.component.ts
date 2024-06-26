import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryJobComponent } from '../job-history.page/job-history.page.component';

import { TableHistoryComponent } from '../job-history.table/job-history.table.component';
import { EnableDisableJobComponent } from '../job-enable-disable-job/enable-disable-job.component';
import { StartStopRemoveJobComponent } from '../job-start-stop-remove-job/start-stop-remove-job.component';
import { PageHistoryFinishedComponent } from '../job-history-finished.page/job-history-finished.component';
import { PageHistoryProgresssComponent } from '../job-history-progress.page/job-history-progress.component';
import { GET_HISTORY_FINISHED_USECASE } from '../../application/usecases/handlers/query/get-history-finished.query.handler';
import { getHistoryFinishedUsecase } from '../../application/usecases/get-history-finished.usecase';
import { GET_HISTORY_PROGRESS_USECASE } from '../../application/usecases/handlers/query/get-history-progress.query.handler';
import { getHistoryProgressUsecase } from '../../application/usecases/get-history-progress.usecase';
import { JobAsyncAggregateJobExecution1 } from '../../domain/entities/status';
import { Status } from '../../domain/aggregates/status';
import { Data, HistoryAggregate } from '../../domain/aggregates/history';

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
  ],
})
export class TableComponent implements OnInit {
  historyProgress: { [key: string]: Data[] } = {};
  historyFinished: { [key: string]: Data[] } = {};
  modalHistory = HistoryJobComponent;
  modalHistoryFinished = PageHistoryFinishedComponent;
  modalHistoryProgresss = PageHistoryProgresssComponent;
  @Input() jobsId: Status | undefined;
  @Input() jobs: { [key: string]: JobAsyncAggregateJobExecution1 } = {};
  @Input() filteredJobs: { [key: string]: JobAsyncAggregateJobExecution1 } = {};
  idName: string | undefined;
  selectedInterval: number = 30;
  private intervalId: any;

  constructor(
    @Inject(GET_HISTORY_FINISHED_USECASE)
    private getHistoryFinishedUsecase: getHistoryFinishedUsecase,
    @Inject(GET_HISTORY_PROGRESS_USECASE)
    private getHistoryProgressUsecase: getHistoryProgressUsecase,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.executeLogicAtInterval();
    Object.entries(this.jobs).forEach(([key, value]) => {
      this.getHistoryProgressUsecase
        .handle(key)
        .subscribe((respuesta: HistoryAggregate) => {
          if (respuesta && respuesta.data) {
            if (!this.historyProgress[key]) {
              this.historyProgress[key] = [];
            }
            this.historyProgress[key].push(respuesta.data);
          }
        });

      this.getHistoryFinishedUsecase
        .handle(key)
        .subscribe((respuesta: HistoryAggregate) => {
          if (respuesta && respuesta.data) {
            if (!this.historyFinished[key]) {
              this.historyFinished[key] = [];
            }
            this.historyFinished[key].push(respuesta.data);
          }
        });
    });
  }

  private executeLogicAtInterval() {
    this.intervalId = setInterval(() => {
      this.historyProgress = {};
      this.historyFinished = {};
      Object.entries(this.jobs).forEach(([key, value]) => {
        this.getHistoryProgressUsecase
          .handle(key)
          .subscribe((respuesta: HistoryAggregate) => {
            if (respuesta && respuesta.data) {
              if (!this.historyProgress[key]) {
                this.historyProgress[key] = [];
              }
              this.historyProgress[key].push(respuesta.data);
            }
          });

        this.getHistoryFinishedUsecase
          .handle(key)
          .subscribe((respuesta: HistoryAggregate) => {
            if (respuesta && respuesta.data) {
              if (!this.historyFinished[key]) {
                this.historyFinished[key] = [];
              }
              this.historyFinished[key].push(respuesta.data);
            }
          });
      });
    }, this.selectedInterval * 1000);
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
  refreshData1() {
    this.historyProgress = {};
    this.historyFinished = {};
    Object.entries(this.jobs).forEach(([key, value]) => {
      this.getHistoryProgressUsecase
        .handle(key)
        .subscribe((respuesta: HistoryAggregate) => {
          if (respuesta && respuesta.data) {
            if (!this.historyProgress[key]) {
              this.historyProgress[key] = [];
            }
            this.historyProgress[key].push(respuesta.data);
          }
        });

      this.getHistoryFinishedUsecase
        .handle(key)
        .subscribe((respuesta: HistoryAggregate) => {
          if (respuesta && respuesta.data) {
            if (!this.historyFinished[key]) {
              this.historyFinished[key] = [];
            }
            this.historyFinished[key].push(respuesta.data);
          }
        });
    });
  }
}
