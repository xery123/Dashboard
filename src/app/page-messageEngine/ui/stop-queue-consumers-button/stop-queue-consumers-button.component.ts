import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { postStopConsumerQueueAdapter } from '../../infrastructure/adapters/post-stopConsumer-queue.adapter/post-stopConsumer-queue.adapter';

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
  isLoading = false;
  private postStopConsumerQueueAdapter = inject(postStopConsumerQueueAdapter);

  @Output() refresh = new EventEmitter<void>();

  stopQueueConsumer() {
    this.isLoading = true;
    this.postStopConsumerQueueAdapter.stopConsumerQueue(this.queue).subscribe({
      next: (response) => {
        console.log('queueConsumer stop:', response);
        this.refresh.emit();
        this.isLoading = false;
      },
    });
  }
}
