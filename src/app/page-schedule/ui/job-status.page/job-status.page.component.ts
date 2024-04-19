
import { Component, OnInit ,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../job-status.table/job-status.table.component";
import { getJobsUsecase } from '../../application/usecases/get-jobs.usecase/get-jobs.usecase';
import { IStatus, JobAsyncAggregateJobExecution1} from '../../domain/interfaces/status';
import { StartStopRemoveJobComponent } from '../job-start-stop-remove-job/start-stop-remove-job.component';
import { startAllJobComponent } from '../job-start-all-Job/start-all-Job.component';

@Component({
    selector: 'app-status-job',
    standalone: true,
    templateUrl: './job-status.page.component.html',
    styleUrl: './job-status.page.component.css',
    imports: [CommonModule, TableComponent, startAllJobComponent,StartStopRemoveJobComponent]
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
      this.enableJob();
      this.disableJob();
      this.removeJob();
    }
    startAllJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }
    startJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }
    stopJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }
    enableJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }
    disableJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }
    removeJob() {
      this.getJobsUsecase.getStatus().subscribe((respuesta) => (this.jobsId = respuesta));
    }

}
