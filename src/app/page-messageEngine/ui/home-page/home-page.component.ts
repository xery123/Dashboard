import { CommonModule } from '@angular/common';
import { getStatusAdapter } from '../../infrastructure/adapters/get-status.adapter/get-status.adapter';
import { Component, OnInit, inject } from '@angular/core';
import { TableMessageEngineComponent } from '../table-message-engine/table-message-engine.component';
import { SearchBoxComponent } from '../search-box/search-box.component';
import {
  IStatus,
  LocalYhonAcurioLimberIoC,
} from '../../domain/interface/status';
import { StartButtonComponent } from '../start-button/start-button.component';
import { StopQueueConsumerComponent } from '../stop-queue-consumers-button/stop-queue-consumers-button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [
    CommonModule,
    TableMessageEngineComponent,
    SearchBoxComponent,
    StartButtonComponent,
    StopQueueConsumerComponent,
  ],
})
export default class HomePageComponent implements OnInit {
  private readonly getStatusAdapter = inject(getStatusAdapter);

  message: IStatus | undefined;
  queuesSummary: LocalYhonAcurioLimberIoC[] = [];

  ngOnInit(): void {
    this.getStatusAdapter
      .getStatus()
      .subscribe((respuesta) => (this.message = respuesta));

    this.initFilteredQueues();

    this.getStatusAdapter.getStatus().subscribe((data: IStatus) => {
      this.message = data;
      this.queuesSummary = Object.values(data.data.queuesSummary);
    });

    this.initFilteredQueues();
    this.handleJobOperation('startAllQueue');
    this.handleJobOperation('stopQueueConsumer');
  }

  handleJobOperation(operation: 'startAllQueue' | 'stopQueueConsumer') {
    this.getStatusAdapter.getStatus().subscribe((data: IStatus) => {
      this.message = data;
      this.queuesSummary = Object.values(data.data.queuesSummary);
    });
  }

  filteredQueues: string[] = [];

  initFilteredQueues() {
    this.filteredQueues = this.queuesSummary.map((queue) => queue.queueName);
  }

  onSearch(term: string): void {
    if (!this.queuesSummary) {
      this.filteredQueues = [];
      return;
    }

    if (!term) {
      this.initFilteredQueues();
    } else {
      this.filteredQueues = this.queuesSummary
        .filter((queue) =>
          queue.queueName.toLowerCase().includes(term.toLowerCase())
        )
        .map((queue) => queue.queueName);
    }
  }
}
