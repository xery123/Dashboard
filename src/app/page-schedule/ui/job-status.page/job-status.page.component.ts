import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../job-status.table/job-status.table.component';
import { getJobsUsecase } from '../../application/usecases/get-jobs.usecase/get-jobs.usecase';
import {
  IStatus,
  JobAsyncAggregateJobExecution1,
} from '../../domain/interfaces/status';
import { StartStopRemoveJobComponent } from '../job-start-stop-remove-job/start-stop-remove-job.component';
import { startAllJobComponent } from '../job-start-all-Job/start-all-Job.component';
import { EnableDisableJobComponent } from '../job-enable-disable-job/enable-disable-job.component';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-status-job',
  standalone: true,
  templateUrl: './job-status.page.component.html',
  styleUrl: './job-status.page.component.css',
  imports: [
    CommonModule,
    TableComponent,
    startAllJobComponent,
    StartStopRemoveJobComponent,
    EnableDisableJobComponent,
  ],
})
export default class StatusJobComponent implements OnInit {
  private readonly getJobsUsecase = inject(getJobsUsecase);
  @Input() jobId: string = '';
  jobsId: IStatus | undefined;
  refreshJob: JobAsyncAggregateJobExecution1 | undefined;

  constructor(private http: HttpClient, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.getJobsUsecase.getStatus().subscribe((respuesta) => {
      this.jobsId = respuesta;
    });

    this.startAllJob();
    this.handleJobOperation('refreshJob');
    this.handleJobOperation('enableDisable');
  }

  startAllJob() {
    this.getJobsUsecase.getStatus().subscribe((respuesta) => {
      this.jobsId = respuesta;
    });
  }

  handleJobOperation(operation: 'refreshJob' | 'enableDisable') {
    this.getJobsUsecase.getStatus().subscribe((respuesta) => {
      this.jobsId = respuesta;
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
