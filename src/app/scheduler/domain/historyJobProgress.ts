export interface HistoryJobProgress {
  data: DataP;
}

export interface DataP {
  history: HistoryProgress[];
}

export interface HistoryProgress {
  jobExecutionStartedAt: string;
  jobExecutedAt: string;
  exception: string;
  jobExecutionFailedAt: string;
  jobStoppedFailedAt: string;
  executionTimeInMilliseconds: number;
}
