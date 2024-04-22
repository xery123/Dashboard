import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startStopRemoveJobsUsecase } from '../../application/usecases/start-stop-remove-jobs.usecase/start-stop-remove-jobs.usecase';

@Component({
  selector: 'app-start-all-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-all-Job.component.html',
  styleUrl: './start-all-Job.component.css',
})
export class startAllJobComponent {
  isLoading = false;
  private startStopRemoveJobsUsecase = inject(startStopRemoveJobsUsecase);
  @Output() refreshAll = new EventEmitter<void>();

  startAllJob() {
    this.isLoading = true;
    this.startStopRemoveJobsUsecase.startAllJob().subscribe({
      next: (response) => {
        console.log('jobAll enabled:', response);
        this.refreshAll.emit();
        this.isLoading = false;
      },
    });
  }
}
