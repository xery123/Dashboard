import { EnvironmentService } from '../../../select environment/select-environment.service';

export class ENDPOINTS {
  static HISTORY(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/history/`;
  }
  static HISTORY_FILTER(page: number, pageSize: number): string {
    return `?filter=ALL&pageSize=${pageSize}&page=${page}`;
  }
  static HISTORY_FINISHED(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/history/`;
  }
  static HISTORY_FINISHED_FILTER(page: number, pageSize: number): string {
    return `?filter=LONGEST_FINISHED&pageSize=${pageSize}&page=${page}`;
  }
  static HISTORY_PROGRESS(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/history/`;
  }
  static HISTORY_PROGRESS_FILTER(page: number, pageSize: number): string {
    return `?filter=LONGEST_IN_PROGRESS&pageSize=${pageSize}&page=${page}`;
  }
  static START_ALL(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/start`;
  }
  static STATUS(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/status`;
  }
  static STATUS_QUEUE(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/status/`;
  }
  static STOP_CONSUMERS(EnvironmentService: EnvironmentService) {
    return `${EnvironmentService.selectedApiUrl}/api/v4/jobs/messenger/queue/stop-consumers/`;
  }
}
