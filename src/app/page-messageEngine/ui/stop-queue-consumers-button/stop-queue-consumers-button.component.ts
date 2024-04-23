import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-queue-consumer-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stop-queue-consumers-button.component.html',
  styleUrl: './stop-queue-consumers-button.component.css',
})
export class StopQueueConsumerComponent {
  isLoading = false;
  stopQueueConsumer() {}
}
