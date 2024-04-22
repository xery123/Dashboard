import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryJobComponent } from '../job-history.page/job-history.page.component';
import { History } from '../../domain/interfaces/history';
import { TableHistoryComponent } from '../job-history.table/job-history.table.component';
import {
  IStatus,
  JobAsyncAggregateJobExecution1,
} from '../../domain/interfaces/status';
import { EnableDisableJobComponent } from '../job-enable-disable-job/enable-disable-job.component';
import { StartStopRemoveJobComponent } from '../job-start-stop-remove-job/start-stop-remove-job.component';
import StatusJobComponent from '../job-status.page/job-status.page.component';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './job-status.table.component.html',
  styleUrl: './job-status.table.component.css',
  imports: [
    CommonModule,
    TableHistoryComponent,
    EnableDisableJobComponent,
    StartStopRemoveJobComponent,
    StatusJobComponent,
  ],
})
export class TableComponent {
  @Input()
  jobsId: IStatus | undefined;

  idName: string | undefined;

  constructor(private modalService: NgbModal) {}

  obtenerId(id: string) {
    this.idName = id;
    this.abrirModal();
  }

  abrirModal() {
    const modalRef = this.modalService.open(HistoryJobComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.idName = this.idName;
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
