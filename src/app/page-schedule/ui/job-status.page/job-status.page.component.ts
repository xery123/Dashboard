
import { Component, OnInit ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../job-status.table/job-status.table.component";
import { EnableDisableAllJobComponent } from "../start-all-Job/start-all-Job.component";
import { getJobsUsecase } from '../../application/get-jobs.usecase/get-jobs.usecase';
import { JobStatusTableIdComponent } from "../job-status.table-id/job-status.table-id.component";
import { IStatus, JobAsyncAggregateJobExecution1} from '../../domain/interfaces/status';
import { StartStopRemoveJobComponent } from '../start-stop-remove-job/start-stop-remove-job.component';

@Component({
    selector: 'app-status-job',
    standalone: true,
    templateUrl: './job-status.page.component.html',
    styleUrl: './job-status.page.component.css',
    imports: [CommonModule, TableComponent, EnableDisableAllJobComponent,
       JobStatusTableIdComponent,StartStopRemoveJobComponent]
})
export default class StatusJobComponent implements OnInit {

  private getJobsUsecase = inject(getJobsUsecase);


  jobsId: IStatus | undefined;
  refreshJob: JobAsyncAggregateJobExecution1 | undefined;

  ngOnInit(): void {

      this.getJobsUsecase .getStatus()
      .subscribe((respuesta) => (this.jobsId=respuesta));
      this.startAllJob();
      this.startJob();
      this.stopJob();
      this.removeJob();
    }
    startJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }
    stopJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }
    removeJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }
    startAllJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }
}
