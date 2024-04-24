import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { postStartAllQueueAdapter } from '../../infrastructure/adapters/post-startAll-queue.adapter/post-startAll-queue.adapter';

@Component({
  selector: 'app-start-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-button.component.html',
  styleUrl: './start-button.component.css',
})
export class StartButtonComponent {
  isLoading = false;
  private postStartAllQueueAdapter = inject(postStartAllQueueAdapter);

  @Output() refreshAll = new EventEmitter<void>();

  startAllQueue() {
    this.isLoading = true;
    this.postStartAllQueueAdapter.startAllQueue().subscribe({
      next: (response) => {
        console.log('queueAll enabled:', response);
        this.refreshAll.emit();
        this.isLoading = false;
      },
    });
  }
}
