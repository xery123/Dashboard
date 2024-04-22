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
  @Output() refreshEnable = new EventEmitter<void>();
  @Output() refreshDisable = new EventEmitter<void>();

  enableJob() {
    this.isLoading = true;
    this.enableDisableJobsUsecase.enableJob(this.jobId).subscribe({
      next: (response) => {
        console.log('job enabled:', response);
        this.isLoading = false;
      },
    });
    this.refreshEnable.emit();
  }

  disableJob() {
    this.isLoading = true;
    this.enableDisableJobsUsecase.disableJob(this.jobId).subscribe({
      next: (response) => {
        console.log('job disabled:', response);
        this.isLoading = false;
      },
    });
    this.refreshDisable.emit();
  }
}
