import { CommonModule, isPlatformBrowser } from '@angular/common';
import { getStatusAdapter } from '../../infrastructure/adapters/get-status.adapter/get-status.adapter';
import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { TableMessageEngineComponent } from '../table-message-engine/table-message-engine.component';
import { SearchBoxComponent } from '../search-box/search-box.component';
import {
  IStatus,
  LocalYhonAcurioLimberIoC,
} from '../../domain/interface/status';
import { StartButtonComponent } from '../start-button/start-button.component';
import { StopQueueConsumerComponent } from '../stop-queue-consumers-button/stop-queue-consumers-button.component';
import { getStatusUsecase } from '../../aplication/usecases/get-status.usecase/get-status.usecase';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { startAllStopUsecase } from '../../aplication/usecases/startAll-stop.usecase/startAll-stop.usecase';
import { catchError, finalize, of } from 'rxjs';
import { RefreshBoxComponent } from '../refresh-box/refresh-box.component';
import { SelectedApiBoxComponent } from '../selected-api-box/selected-api-box.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [
    CommonModule,
    TableMessageEngineComponent,
    SearchBoxComponent,
    FormsModule,
    StartButtonComponent,
    StopQueueConsumerComponent,
    RouterModule,
    RefreshBoxComponent,
    SelectedApiBoxComponent,
  ],
})
export default class HomePageComponent implements OnInit {
  private readonly getStatusUsecase = inject(getStatusUsecase);

  message: IStatus | undefined;
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
  private startAllStopUsecase = inject(startAllStopUsecase);

  constructor(private router: Router) {
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
    this.getStatusUsecase.getStatus().subscribe((data: IStatus) => {
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
      this.startAllStopUsecase
        .stopConsumerQueue(queue)
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
        this.getStatusUsecase.getStatus().subscribe((data: IStatus) => {
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
    this.getStatusUsecase.getStatus().subscribe((data: IStatus) => {
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
      .getStatus()
      .subscribe((respuesta) => (this.message = respuesta));

    this.getStatusUsecase.getStatus().subscribe((data: IStatus) => {
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
