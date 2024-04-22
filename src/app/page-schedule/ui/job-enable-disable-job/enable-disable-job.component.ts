import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { enableDisableJobsUsecase } from '../../application/usecases/enable-disable-jobs.usecase/enable-disable-jobs.usecase';

@Component({
  selector: 'app-enable-disable-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enable-disable-job.component.html',
  styleUrls: ['./enable-disable-job.component.css'],
})
export class EnableDisableJobComponent {
  @Input()
  jobId: string = '';

  @Input()
  moduleStatus: string = '';

  isLoading = false;

  private enableDisableJobsUsecase = inject(enableDisableJobsUsecase);
  @Output() refreshEnableDisable = new EventEmitter<void>();

  enableJob() {
    this.isLoading = true;
    this.enableDisableJobsUsecase.enableJob(this.jobId).subscribe({
      next: (response) => {
        console.log('job enabled:', response);
        this.refreshEnableDisable.emit();
        this.isLoading = false;
      },
    });
  }

  disableJob() {
    this.isLoading = true;
    this.enableDisableJobsUsecase.disableJob(this.jobId).subscribe({
      next: (response) => {
        console.log('job disabled:', response);
        this.refreshEnableDisable.emit();
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
