import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { startAllStopUsecase } from '../../aplication/usecases/startAll-stop.usecase/startAll-stop.usecase';

@Component({
  selector: 'app-start-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-button.component.html',
  styleUrl: './start-button.component.css',
})
export class StartButtonComponent {
  isLoading = false;
  private startAllStopUsecase = inject(startAllStopUsecase);

  @Output() refreshAll = new EventEmitter<void>();

  startAllQueue() {
    this.isLoading = true;
    this.startAllStopUsecase.startAllQueue().subscribe({
      next: (response) => {
        console.log('queueAll enabled:', response);
        this.refreshAll.emit();
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
