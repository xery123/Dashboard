import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startStopRemoveJobsUsecase } from '../../application/usecases/start-stop-remove-jobs.usecase/start-stop-remove-jobs.usecase';

@Component({
  selector: 'app-start-stop-remove-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-stop-remove-job.component.html',
  styleUrls: ['./start-stop-remove-job.component.css'],
})
export class StartStopRemoveJobComponent {
  @Input()
  jobId: string = '';

  @Input()
  jobStatus: string = '';

  @Input()
  moduleStatus: string = '';

  @Input()
  jobStarted: string = '';

  isLoading = false;

  private startStopRemoveJobsUsecase = inject(startStopRemoveJobsUsecase);
  @Output() refresh = new EventEmitter<void>();

  startJob() {
    this.isLoading = true;
    this.startStopRemoveJobsUsecase.startJob(this.jobId).subscribe({
      next: (response) => {
        console.log('job enabled:', response);
        this.refresh.emit();
        this.isLoading = false;
      },
    });
  }

  stopJob() {
    this.isLoading = true;
    this.startStopRemoveJobsUsecase.stopJob(this.jobId).subscribe({
      next: (response) => {
        console.log('job disabled:', response);
        this.refresh.emit();
        this.isLoading = false;
      },
    });
  }

  removeJob() {
    this.isLoading = true;
    this.startStopRemoveJobsUsecase.removeJob(this.jobId).subscribe({
      next: (response) => {
        console.log('job deleted:', response);
        this.refresh.emit();
        this.isLoading = false;
      },
    });
  }

  isButtonDisabled = false;
  disableTimeout: any;

  disableButtons() {
    this.isButtonDisabled = true;

    if (this.disableTimeout) {
      clearTimeout(this.disableTimeout);
    }

    this.disableTimeout = setTimeout(() => {
      this.isButtonDisabled = false;
    }, 3000);
  }
}
