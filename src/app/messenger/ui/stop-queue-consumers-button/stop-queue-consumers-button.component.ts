import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  inject,
} from '@angular/core';
import { stopUsecase } from '../../aplication/usecases/stop-consumer.usecase';
import { STOP_CONSUMER_QUEUE_USECASE } from '../../aplication/usecases/handlers/comand/stop-consumer.comand.handler';

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
  constructor(
    @Inject(STOP_CONSUMER_QUEUE_USECASE)
    private stopUsecase: stopUsecase
  ) {}

  @Output() refresh = new EventEmitter<void>();

  stopQueueConsumer() {
    this.isLoading = true;
    this.stopUsecase.handle(this.queue).subscribe({
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
