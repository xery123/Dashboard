import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DISABLE_MODULE_USECASE } from '../../application/usecases/handlers/comand/disable.comand.handler';
import { ENABLE_MODULE_USECASE } from '../../application/usecases/handlers/comand/enable.comand.handler';
import { disableModuleUsecase } from '../../application/usecases/disable-module.usecase';
import { enableModuleUsecase } from '../../application/usecases/enable-module.usecase';

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

  constructor(
    @Inject(DISABLE_MODULE_USECASE)
    private disableModuleUsecase: disableModuleUsecase,
    @Inject(ENABLE_MODULE_USECASE)
    private enableModuleUsecase: enableModuleUsecase
  ) {}
  @Output() refreshEnableDisable = new EventEmitter<void>();

  enableJob() {
    this.isLoading = true;
    this.enableModuleUsecase.handle(this.jobId).subscribe({
      next: (response) => {
        console.log('job enabled:', response);
        this.refreshEnableDisable.emit();
      },
    });
  }

  disableJob() {
    this.isLoading = true;
    this.disableModuleUsecase.handle(this.jobId).subscribe({
      next: (response) => {
        console.log('job disabled:', response);
        this.refreshEnableDisable.emit();
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
