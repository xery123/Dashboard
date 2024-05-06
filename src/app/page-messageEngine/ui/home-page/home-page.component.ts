import { CommonModule, isPlatformBrowser } from '@angular/common';
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
import { getStatusUsecase } from '../../aplication/usecases/get-status.usecase/get-status.usecase';

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
  private readonly getStatusUsecase = inject(getStatusUsecase);

  message: IStatus | undefined;
  queuesSummary: LocalYhonAcurioLimberIoC[] = [];
  userProfile: any | null = null;

  constructor() {}
  ngOnInit(): void {
    this.getStatusUsecase
      .getStatus()
      .subscribe((respuesta) => (this.message = respuesta));

    this.getStatusUsecase.getStatus().subscribe((data: IStatus) => {
      this.message = data;
      this.queuesSummary = Object.values(data.data.queuesSummary);
    });

    this.initFilteredQueues();

    this.handleJobOperation('startAllQueue');
    this.handleJobOperation('stopQueueConsumer');
  }
  ngAfterViewInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.getStatusUsecase.getStatus().subscribe((data: IStatus) => {
      this.message = data;
      this.queuesSummary = Object.values(data.data.queuesSummary);
      this.initFilteredQueues();
    });
  }

  handleJobOperation(operation: 'startAllQueue' | 'stopQueueConsumer') {
    this.getStatusUsecase.getStatus().subscribe((data: IStatus) => {
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
