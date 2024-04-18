import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StartStopRemoveJobComponent } from "../start-stop-remove-job/start-stop-remove-job.component";
import { IStatus} from '../../domain/interfaces/status';
import { TableComponent } from "../job-status.table/job-status.table.component";

@Component({
    selector: 'app-tableId',
    standalone: true,
    templateUrl: './job-status.table-id.component.html',
    styleUrl: './job-status.table-id.component.css',
    imports: [CommonModule, StartStopRemoveJobComponent, TableComponent]
})
export class JobStatusTableIdComponent {

  @Input()
  jobsId: IStatus | undefined;

  @Output() startJob = new EventEmitter<void>();
  @Output() stopJob = new EventEmitter<void>();
  @Output() removeJob = new EventEmitter<void>();

  onRefresh() {
    this.startJob.emit();
    this.stopJob.emit();
    this.removeJob.emit();
  }
}
