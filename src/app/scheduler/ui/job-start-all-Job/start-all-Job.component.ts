import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { START_ALL_USECASE } from '../../application/usecases/handlers/comand/start-all.comand.handler';
import { startAllUsecase } from '../../application/usecases/start-all-job.usecase';

@Component({
  selector: 'app-start-all-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-all-Job.component.html',
  styleUrl: './start-all-Job.component.css',
})
export class startAllJobComponent {
  isLoading = false;
  constructor(
    @Inject(START_ALL_USECASE)
    private startAllUsecase: startAllUsecase
  ) {}
  @Output() refreshAll = new EventEmitter<void>();

  startAllJob() {
    this.isLoading = true;
    this.startAllUsecase.handle().subscribe({
      next: (response) => {
        console.log('jobAll enabled:', response);
        this.refreshAll.emit();
        this.isLoading = false;
      },
    });
  }
}
