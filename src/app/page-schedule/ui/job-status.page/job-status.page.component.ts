import {
  Component,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../job-status.table/job-status.table.component';
import { getJobsUsecase } from '../../application/usecases/get-jobs.usecase/get-jobs.usecase';
import {
  IStatus,
  JobAsyncAggregateJobExecution1,
  JobsSummary,
} from '../../domain/interfaces/status';
import { StartStopRemoveJobComponent } from '../job-start-stop-remove-job/start-stop-remove-job.component';
import { startAllJobComponent } from '../job-start-all-Job/start-all-Job.component';
import { EnableDisableJobComponent } from '../job-enable-disable-job/enable-disable-job.component';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-status-job',
  standalone: true,
  templateUrl: './job-status.page.component.html',
  styleUrls: ['./job-status.page.component.css'],
  imports: [
    CommonModule,
    TableComponent,
    startAllJobComponent,
    StartStopRemoveJobComponent,
    EnableDisableJobComponent,
    SearchBoxComponent,
  ],
})
export default class StatusJobComponent implements OnInit {
  private readonly getJobsUsecase = inject(getJobsUsecase);
  @Input() jobId: string = '';
  jobsId: IStatus | undefined;
  jobs: { [key: string]: JobAsyncAggregateJobExecution1 } = {};
  filteredJobs: { [key: string]: JobAsyncAggregateJobExecution1 } = {};
  userProfile: any | null = null;

  constructor() {}

  ngOnInit(): void {
    this.getJobsUsecase.getStatus().subscribe((respuesta) => {
      this.jobsId = respuesta;
      this.extractJobNames();
      this.initFilteredJobs();
    });
    this.startAllJob();
    this.handleJobOperation('refreshJob');
    this.handleJobOperation('enableDisable');
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
    this.getJobsUsecase.getStatus().subscribe((respuesta) => {
      this.jobsId = respuesta;
      this.extractJobNames();
    });
  }

  handleJobOperation(operation: 'refreshJob' | 'enableDisable') {
    this.getJobsUsecase.getStatus().subscribe((respuesta) => {
      this.jobsId = respuesta;
      this.extractJobNames();
    });
    // if (this.jobId) {
    //   this.ngZone.run(() => {
    //     this.getJobsUsecase.getStatusJob(this.jobId).subscribe((respuesta) => {
    //       this.refreshJob = respuesta.dataJob;
    //     });
    //   });
    // }
  }
}
