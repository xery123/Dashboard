import { Component,EventEmitter,Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryJobComponent } from '../job-history.page/job-history.page.component';
import { History} from '../../domain/interfaces/history';
import { TableHistoryComponent } from "../job-history.table/job-history.table.component";
import { IStatus, JobAsyncAggregateJobExecution1 } from '../../domain/interfaces/status';
import { EnableDisableJobComponent } from "../job-enable-disable-job/enable-disable-job.component";
import { StartStopRemoveJobComponent } from "../job-start-stop-remove-job/start-stop-remove-job.component";

 @Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './job-status.table.component.html',
    styleUrl: './job-status.table.component.css',
    imports: [CommonModule, TableHistoryComponent, EnableDisableJobComponent, StartStopRemoveJobComponent]
})

 export class TableComponent {

  @Input()
  jobsId: IStatus | undefined;

  idName: string | undefined;

	constructor(private modalService: NgbModal) {
	}

  obtenerId(id: string) {
    this.idName = id;
    this.abrirModal();
  };

  abrirModal() {
    const modalRef = this.modalService.open(HistoryJobComponent, { size: 'lg' });
    modalRef.componentInstance.idName= this.idName;
  }

  @Output() startJob = new EventEmitter<void>();
  @Output() stopJob = new EventEmitter<void>();
  @Output() enableJob = new EventEmitter<void>();
  @Output() disableJob = new EventEmitter<void>();
  @Output() removeJob = new EventEmitter<void>();

  onRefresh() {
    this.enableJob.emit();
    this.disableJob.emit();
    this.startJob.emit();
    this.stopJob.emit();
    this.removeJob.emit();
  }
}

