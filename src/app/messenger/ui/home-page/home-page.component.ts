import { CommonModule } from '@angular/common';

import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { TableMessageEngineComponent } from '../table-message-engine/table-message-engine.component';
import { Status, LocalYhonAcurioLimberIoC } from '../../domain/status';
import { StartButtonComponent } from '../start-button/start-button.component';
import { StopQueueConsumerComponent } from '../stop-queue-consumers-button/stop-queue-consumers-button.component';

import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { catchError, finalize, of } from 'rxjs';

import { getStatusUsecase } from '../../aplication/usecases/get-status.usecase';
import { STOP_CONSUMER_QUEUE_USECASE } from '../../aplication/usecases/handlers/comand/stop-consumer.comand.handler';
import { GET_STATUS_USECASE } from '../../aplication/usecases/handlers/query/get-status.query.handler';
import { stopUsecase } from '../../aplication/usecases/stop-consumer.usecase';

import { SharedModule } from '../../../shared module/modules/shared.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [
    CommonModule,
    TableMessageEngineComponent,
    FormsModule,
    StartButtonComponent,
    StopQueueConsumerComponent,
    RouterModule,

    SharedModule,
  ],
})
export default class HomePageComponent implements OnInit {
  message: Status | undefined;
  queuesSummary: LocalYhonAcurioLimberIoC[] = [];
  userProfile: any | null = null;
  intervalOptions: { value: number; label: string }[] = [
    { value: 5, label: '5 s' },
    { value: 10, label: '10 s' },
    { value: 15, label: '15 s' },
    { value: 30, label: '30 s' },
  ];
  selectedInterval: number = 5;
  private intervalId: any;
  isSearching: boolean = false;
  filteredQueues: string[] = [];
  filteredQueuesStopAll: string[] = [];
  currentRoute: string;
  isLoading = false;
  @ViewChild(TableMessageEngineComponent)
  tableMessageEngineComponent!: TableMessageEngineComponent;

  constructor(
    @Inject(GET_STATUS_USECASE)
    private getStatusUsecase: getStatusUsecase,
    @Inject(STOP_CONSUMER_QUEUE_USECASE)
    private stopUsecase: stopUsecase,
    private router: Router
  ) {
    this.currentRoute = '';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
  isCurrentRoute(route: string): boolean {
    return this.currentRoute.includes(route);
  }

  ngOnInit(): void {
    this.executeLogicAtInterval();
    this.getStatusUsecase.handle().subscribe((data: Status) => {
      this.message = data;
      this.queuesSummary = Object.values(data.data.queuesSummary);
      this.initFilteredQueues();
      this.filterQueues();
    });
    this.handleJobOperation('startAllQueue');
    this.handleJobOperation('stopQueueConsumer');
  }
  private filterQueues(): void {
    this.filteredQueuesStopAll = [];
    for (const queue of Object.values(this.queuesSummary)) {
      if (queue.numberConsumers > 0) {
        this.filteredQueuesStopAll.push(queue.queueName);
      }
    }
  }
  stopAllQueues(): void {
    this.isLoading = true;
    this.filteredQueuesStopAll.forEach((queue: string) => {
      this.stopUsecase
        .handle(queue)
        .pipe(
          catchError((error) => {
            console.error(`Error al detener el job ${queue}:`, error);
            return of(error);
          }),
          finalize(() => {
            this.isLoading = false;
            this.refreshData();
          })
        )
        .subscribe({
          next: (response) => {
            console.log(`Job ${queue} detenido:`, response);
          },
        });
    });
  }
  private executeLogicAtInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.filteredQueuesStopAll = [];
      if (!this.isSearching) {
        this.getStatusUsecase.handle().subscribe((data: Status) => {
          this.message = data;
          this.queuesSummary = Object.values(data.data.queuesSummary);
          this.initFilteredQueues();
          this.filterQueues();
        });
      }
    }, this.selectedInterval * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  handleJobOperation(operation: 'startAllQueue' | 'stopQueueConsumer') {
    this.getStatusUsecase.handle().subscribe((data: Status) => {
      this.message = data;
      this.queuesSummary = Object.values(data.data.queuesSummary);
    });
  }

  initFilteredQueues() {
    this.filteredQueues = this.queuesSummary.map((queue) => queue.queueName);
  }

  onSearch(term: string): void {
    this.isSearching = !!term;
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

  refreshData() {
    this.filteredQueuesStopAll = [];
    this.getStatusUsecase
      .handle()
      .subscribe((respuesta) => (this.message = respuesta));

    this.getStatusUsecase.handle().subscribe((data: Status) => {
      this.message = data;
      this.queuesSummary = Object.values(data.data.queuesSummary);
    });

    this.initFilteredQueues();
    this.handleRefreshEvent();
    this.filterQueues();
  }

  onIntervalChange(event: any) {
    this.selectedInterval = Number(event.target.value);
    console.log('Nuevo intervalo seleccionado:', this.selectedInterval);
    this.executeLogicAtInterval();
  }

  handleRefreshEvent() {
    if (this.tableMessageEngineComponent) {
      this.tableMessageEngineComponent.refreshData();
    }
  }
}
