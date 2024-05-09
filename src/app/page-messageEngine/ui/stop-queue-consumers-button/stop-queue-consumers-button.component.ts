import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { postStopConsumerQueueAdapter } from '../../infrastructure/adapters/post-stopConsumer-queue.adapter/post-stopConsumer-queue.adapter';
import { startAllStopUsecase } from '../../aplication/usecases/startAll-stop.usecase/startAll-stop.usecase';

@Component({
  selector: 'app-stop-queue-consumer-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stop-queue-consumers-button.component.html',
  styleUrl: './stop-queue-consumers-button.component.css',
})
export class StopQueueConsumerComponent {
  @Input()
  queue: string = '';
  @Input()
  numberConsumers: number = 0;
  isLoading = false;
  private startAllStopUsecase = inject(startAllStopUsecase);

  @Output() refresh = new EventEmitter<void>();

  stopQueueConsumer() {
    this.isLoading = true;
    this.startAllStopUsecase.stopConsumerQueue(this.queue).subscribe({
      next: (response) => {
        console.log('queueConsumer stop:', response);
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
