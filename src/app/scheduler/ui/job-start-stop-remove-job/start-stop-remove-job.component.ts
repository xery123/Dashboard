import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { START_USECASE } from '../../application/usecases/handlers/comand/start.comand.handler';
import { STOP_USECASE } from '../../application/usecases/handlers/comand/stop.comand.handler';
import { REMOVE_USECASE } from '../../application/usecases/handlers/comand/remove.comand.handler';
import { startUsecase } from '../../application/usecases/start-job.usecase';
import { stopUsecase } from '../../application/usecases/stop-job.usecase';
import { removeUsecase } from '../../application/usecases/remove-job.usecase';
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

  constructor(
    @Inject(START_USECASE)
    private startUsecase: startUsecase,
    @Inject(STOP_USECASE)
    private stopUsecase: stopUsecase,
    @Inject(REMOVE_USECASE)
    private removeUsecase: removeUsecase
  ) {}
  @Output() refresh1 = new EventEmitter<void>();

  startJob() {
    this.isLoading = true;
    this.startUsecase.handle(this.jobId).subscribe({
      next: (response) => {
        console.log('job enabled:', response);
        this.refresh1.emit();
      },
    });
  }

  stopJob() {
    this.isLoading = true;
    this.stopUsecase.handle(this.jobId).subscribe({
      next: (response) => {
        console.log('job disabled:', response);
        this.refresh1.emit();
      },
    });
  }

  removeJob() {
    this.isLoading = true;
    this.removeUsecase.handle(this.jobId).subscribe({
      next: (response) => {
        console.log('job deleted:', response);
        this.refresh1.emit();
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
