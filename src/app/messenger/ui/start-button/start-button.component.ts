import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { START_ALL_QUEUE_USECASE } from '../../aplication/usecases/handlers/comand/start-all.comand.handler';
import { startAllUsecase } from '../../aplication/usecases/start-all.usecase';

@Component({
  selector: 'app-start-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-button.component.html',
  styleUrl: './start-button.component.css',
})
export class StartButtonComponent {
  isLoading = false;
  constructor(
    @Inject(START_ALL_QUEUE_USECASE)
    private startAllUsecase: startAllUsecase
  ) {}

  @Output() refreshAll = new EventEmitter<void>();

  startAllQueue() {
    this.isLoading = true;
    this.startAllUsecase.handle().subscribe({
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
