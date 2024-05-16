import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../job-status.table/job-status.table.component';
import { Status, JobAsyncAggregateJobExecution1 } from '../../domain/status';
import { StartStopRemoveJobComponent } from '../job-start-stop-remove-job/start-stop-remove-job.component';
import { startAllJobComponent } from '../job-start-all-Job/start-all-Job.component';
import { EnableDisableJobComponent } from '../job-enable-disable-job/enable-disable-job.component';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';

import { SelectedApiBoxComponent } from '../selected-api-box/selected-api-box.component';
import { RefreshBoxComponent } from '../refresh-box/refresh-box.component';
import { STOP_USECASE } from '../../application/usecases/handlers/comand/stop.comand.handler';
import { stopUsecase } from '../../application/usecases/stop-job.usecase';
import { GET_STATUS_USECASE } from '../../application/usecases/handlers/query/get-status.query.handler';
import { getStatusUsecase } from '../../application/usecases/get-status.usecase';

@Component({
  selector: 'app-status-job',
  standalone: true,
  templateUrl: './job-status.page.component.html',
  styleUrls: ['./job-status.page.component.css'],
  imports: [
    CommonModule,
    TableComponent,
    FormsModule,
    startAllJobComponent,
    StartStopRemoveJobComponent,
    EnableDisableJobComponent,
    SearchBoxComponent,
    RouterModule,
    SelectedApiBoxComponent,
    RefreshBoxComponent,
  ],
})
export default class StatusJobComponent implements OnInit, OnDestroy {
  @Input() jobId: string = '';
  jobsId: Status | undefined;
  jobs: { [key: string]: JobAsyncAggregateJobExecution1 } = {};
  filteredJobs: { [key: string]: JobAsyncAggregateJobExecution1 } = {};
  intervalOptions: { value: number; label: string }[] = [
    { value: 5, label: '5 s' },
    { value: 10, label: '10 s' },
    { value: 15, label: '15 s' },
    { value: 30, label: '30 s' },
  ];
  selectedInterval: number = 5;
  private intervalId: any;
  isSearching: boolean = false;
  currentRoute: string;
  filteredJobsStopAll: string[] = [];
  isLoading = false;

  constructor(
    @Inject(STOP_USECASE)
    private stopUsecase: stopUsecase,
    @Inject(GET_STATUS_USECASE)
    private getStatusUsecase: getStatusUsecase,
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

  @ViewChild(TableComponent) tableComponent!: TableComponent;
  ngOnInit(): void {
    this.executeLogicAtInterval();
    this.filterJobs();
    this.startAllJob();
    this.handleJobOperation('refreshJob');
    this.handleJobOperation('enableDisable');
  }

  private filterJobs(): void {
    this.filteredJobsStopAll = [];
    for (const [key, job] of Object.entries(this.jobs)) {
      if (job.jobStatus === 'SCHEDULED' && job.moduleStatus === 'ENABLED') {
        this.filteredJobsStopAll.push(key);
      }
    }
  }
  stopAllJobs(): void {
    this.isLoading = true;
    this.filteredJobsStopAll.forEach((job: string) => {
      this.stopUsecase
        .handle(job)
        .pipe(
          catchError((error) => {
            console.error(`Error al detener el job ${job}:`, error);
            return of(error);
          }),
          finalize(() => {
            this.isLoading = false;
            this.refreshData();
          })
        )
        .subscribe({
          next: (response) => {
            console.log(`Job ${job} detenido:`, response);
          },
        });
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private executeLogicAtInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.filteredJobsStopAll = [];
      if (!this.isSearching) {
        this.getStatusUsecase.handle().subscribe((respuesta: Status) => {
          this.jobsId = respuesta;
          this.extractJobNames();
          this.filterJobs();
          this.initFilteredJobs();
        });
      }
    }, this.selectedInterval * 1000);
  }

  private extractJobNames(): void {
    if (this.jobsId && this.jobsId.data.jobsSummary) {
      this.jobs = this.jobsId.data.jobsSummary;
      this.initFilteredJobs();
    }
  }

  initFilteredJobs(): void {
    this.filteredJobs = { ...this.jobs };
  }

  onSearch(term: string): void {
    this.isSearching = !!term;

    if (!term) {
      this.initFilteredJobs();
    } else {
      const lowercaseTerm = term.toLowerCase();
      this.filteredJobs = Object.fromEntries(
        Object.entries(this.jobs).filter(([key]) =>
          key.toLowerCase().includes(lowercaseTerm)
        )
      );
    }
  }

  startAllJob() {
    this.getStatusUsecase.handle().subscribe((respuesta: Status) => {
      this.jobsId = respuesta;
      this.extractJobNames();
    });
  }

  handleJobOperation(operation: 'refreshJob' | 'enableDisable') {
    this.getStatusUsecase.handle().subscribe((respuesta: Status) => {
      this.jobsId = respuesta;
      this.extractJobNames();
      this.filterJobs();
      this.initFilteredJobs();
    });
  }

  refreshData() {
    this.getStatusUsecase.handle().subscribe((respuesta: Status) => {
      this.jobsId = respuesta;
      this.extractJobNames();
    });
    this.handleRefreshEvent();
  }

  onIntervalChange(event: any) {
    this.selectedInterval = Number(event.target.value);
    console.log('Nuevo intervalo seleccionado:', this.selectedInterval);
    this.executeLogicAtInterval();
  }

  handleRefreshEvent() {
    if (this.tableComponent) {
      this.tableComponent.refreshData1();
    }
  }
}
