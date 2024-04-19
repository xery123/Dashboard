import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startStopRemoveJobsUsecase } from '../../application/usecases/start-stop-remove-jobs.usecase/start-stop-remove-jobs.usecase';

@Component({
  selector: 'app-start-stop-remove-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-stop-remove-job.component.html',
  styleUrls: ['./start-stop-remove-job.component.css']
})
export class StartStopRemoveJobComponent {
  @Input()
  jobId: string = ''

  @Input()
  jobStatus: string = '';

  private startStopRemoveJobsUsecase = inject(startStopRemoveJobsUsecase);
  @Output() refreshStart = new EventEmitter<void>();
  @Output() refreshStop = new EventEmitter<void>();
  @Output() refreshRemove = new EventEmitter<void>();

  startJob() {
    this.startStopRemoveJobsUsecase.startJob(this.jobId).subscribe({
      next: response => {
        console.log('job enabled:', response);
      },
    });
    this.refreshStart.emit();
  }

  stopJob() {
    this.startStopRemoveJobsUsecase.stopJob(this.jobId).subscribe({
      next: response => {
        console.log('job disabled:', response);
      },
    });
    this.startStopRemoveJobsUsecase.removeJob(this.jobId).subscribe({
      next: response => {
        console.log('job deleted:', response);
      },
    });
    this.refreshStop.emit();
  }

  // removeJob() {
  //   this.startStopRemoveJobsUsecase.removeJob(this.jobId).subscribe({
  //     next: response => {
  //       console.log('job deleted:', response);
  //     },
  //   });
  //   this.refreshRemove.emit();
  // }
}
