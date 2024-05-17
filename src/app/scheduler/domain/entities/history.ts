export interface HistoryEntitie {
  jobExecutionStartedAt: string;
  jobExecutedAt: string;
  exception: string;
  jobExecutionFailedAt: string;
  jobStoppedFailedAt: string;
  executionTimeInMilliseconds: number;
}
