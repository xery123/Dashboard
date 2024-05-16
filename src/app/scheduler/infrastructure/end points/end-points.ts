import { EnvironmentService } from '../../../select environment/select-environment.service';

export class ENDPOINTS {
  static DISABLE(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/disable/`;
  }
  static ENABLE(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/enable/`;
  }
  static REMOVE(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/remove/`;
  }
  static START_ALL(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/start`;
  }
  static START(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/start/`;
  }
  static STOP(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/stop/`;
  }
  static HISTORY(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/history/`;
  }
  static HISTORY_FILTER(page: number, pageSize: number): string {
    return `?pageSize=${pageSize}&page=${page}`;
  }

  static HISTORY_FINISHED(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/history/`;
  }

  static HISTORY_FINISHED_FILTER(page: number, pageSize: number): string {
    return `?filter=LONGEST_FINISHED&pageSize=${pageSize}&page=${page}`;
  }

  static HISTORY_PROGRESS(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/history/`;
  }
  static HISTORY_PROGRESS_FILTER(page: number, pageSize: number): string {
    return `?filter=LONGEST_IN_PROGRESS&pageSize=${pageSize}&page=${page}`;
  }

  static STATUS(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/status`;
  }
  static STATUS_JOB(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/scheduler/status/`;
  }
}
