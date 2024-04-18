import { Component,  EventEmitter,  Output,  inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { startStopRemoveJobsUsecase } from '../../application/start-stop-remove-jobs.usecase/start-stop-remove-jobs.usecase';

@Component({
  selector: 'app-enable-disable-allJob',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-all-Job.component.html',
  styleUrl: './start-all-Job.component.css'
})
export class EnableDisableAllJobComponent {

  private startStopRemoveJobsUsecase = inject(startStopRemoveJobsUsecase);
  @Output() refreshAll = new EventEmitter<void>();

  startAllJob() {
    this.startStopRemoveJobsUsecase.startAllJob().subscribe({
      next: response => {
        console.log('job enabled:', response);
      },
    });
    this.refreshAll.emit();
  }
}
